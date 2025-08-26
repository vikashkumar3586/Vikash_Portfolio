async function getCodeCount(req, res, next) {
    const { username } = req.params;

    const body = {
        operationName: "getUserProfile",
        variables: { username },
        query: `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }`
    };

    try {
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com',
                'Origin': 'https://leetcode.com',
                'User-Agent': 'Mozilla/5.0'
            },
            body: JSON.stringify(body)
        });
        if (response.status !== 200) {
            throw new Error('Failed to fetch data from LeetCode');
        }
        const data = await response.json();

        const solved = data.data?.matchedUser?.submitStats?.acSubmissionNum?.find(item => item.difficulty === "All")?.count;
        res.json({ totalSolved: solved ?? 0 });

    } catch (error) {
        res.status(500).json({ error: error.message || 'something issue with controller/getCodeCount' });
    }
}

module.exports = getCodeCount;