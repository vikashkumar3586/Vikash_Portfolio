const { getAccessToken, spotifyApi } = require('./getAccessCodeHandler');
const { getTimeAgo } = require('./getLastPlayedTime');

async function getLastPlayed(req, res, next) {
    try {
        const response = await getAccessToken();
        if (!response)
            throw new Error("Error inside getLastPlayed function: 11111111111111");

        const recentlyPlayed = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 1 });
        const getInfo = recentlyPlayed.body.items[0];
        const lastPlayed = getTimeAgo(getInfo.played_at) || 'YesterDay';
        // console.log('getInfo------------------->:', getInfo);
        res.json({
            title: getInfo.track.name,
            artist: getInfo.track.artists.map(artist => artist.name).join(', '),
            image: getInfo.track.album.images[0]?.url || null,
            lastTimePlayed: lastPlayed,
        })
        
        //for testing purpose
        // res.json({
        //     title: "Random Songkjs skjf dkdfkdjf dfkjdf hfdf dfdf skjdff ",
        //     artist: "Random Artist",
        //     image: "https://example.com/random-image.jpg",
        //     lastTimePlayed: "Playing now...",
        // });
    } catch (err) {
        console.error('Error---------------->:', err);
        res.status(500).json({ error: 'Failed to fetch last played song: see console' });
    }
}

module.exports = getLastPlayed;


/*
STEP - 1: paste the link in the browser: "https://accounts.spotify.com/authorize?client_id=472b2383bac844bdbdcfc31edc13ad69&response_type=code&redirect_uri=http://127.0.0.1:3000/dev/lastPlayed&scope=user-read-recently-played"
        it will redirect you to you REDIRECT_URL and you will get a code in the URL (this is your authorization code). save it somewhere or in env file.

STEP-2: using this authorization code, go to postman and make a POST request to "https://accounts.spotify.com/api/token" with the following header & body:
        Header:
            - Content-Type: application/x-www-form-urlencoded
            - Authorization: Basic <base64(client_id:client_secret)> //to get base64(client_id:client_secret), you can use any online base64 encoder, or use the powerShell: [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("client_id:client_secret"))
        Body:
            - grant_type: authorization_code
            - code: <your_authorization_code>
            - redirect_uri: <your_redirect_uri>
        then in respose you will get actual access token and refresh token. save both of them in your .env manually but refresh token is main thing you need as it is not going to change/expire, you can use it to get access token later.
STEP-3: now using saved refresh token, you can get access token by making a GET request to your backend endpoint "/dev/lastPlayed" (which is defined in index.js) and it will return you the current access token.(again save it in .env file)
*/