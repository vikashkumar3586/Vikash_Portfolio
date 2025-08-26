const SpotifyWebApi = require('spotify-web-api-node');
const saveToEnv = require('./saveToEnv');


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUrl: process.env.REDIRECT_URL,
});

spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN);

let accessToken = null;
let expiryTime = null;

async function getAccessToken() {
    const now = new Date().getTime();

    if (!accessToken || now >= expiryTime) {
        try {
            const data = await spotifyApi.refreshAccessToken();
            accessToken = data.body['access_token'];
            saveToEnv("SPOTIFY_ACCESS_TOKEN", accessToken);
            const expiresIn = data.body['expires_in']; // typically 3600s

            expiryTime = now + expiresIn * 1000;
            spotifyApi.setAccessToken(accessToken);
            console.log('🔄 Refreshed Spotify access token');
        } catch (error) {
            console.log("Got error inside getAccesCodeHandler: 11111111111111---------------->: ", error);
        }
    }

    return accessToken;
}

module.exports = { getAccessToken, spotifyApi };
