const cheerio = require('cheerio');

async function getStars(req, res, next) {
    const { username } = req.params;
    const url = `https://www.codechef.com/users/${username}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from CodeChef for user ${username}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        const ratingElement = $('.rating-number').first().text().trim();
        const starsElement = $('.rating-star').first().text().trim();

        res.json({
            rating: ratingElement,
            stars: starsElement,
        });
    } catch (error) {
        console.error('Error fetching CodeChef data:', error.message);
        res.status(500).json({ error: 'Failed to fetch CodeChef user data' });
    }
}

module.exports = getStars;