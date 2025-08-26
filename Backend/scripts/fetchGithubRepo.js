const fs = require('fs')

const GITHUB_USERNAME = 'vikashkumar3586';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // optional, for private repos or higher rate limit

async function fetchRepos() {
    const headers = {
        'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
        headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers,
    });

    const repos = await res.json();
    console.log(repos);
    const formatted = repos.map((repo) => ({
        title: repo.name,
        description: repo.description,
        url: repo.html_url,
        tech: [], // optional: fill later manually or via topics
        year: new Date(repo.created_at).getFullYear(),
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        isPrivate: repo.private,
    }));

    fs.writeFileSync(
        '../data/projects.js',
        `export const projects = ${JSON.stringify(formatted, null, 2)};\n`
    );

    console.log(`Fetched ${repos.length} repos.`);
}

fetchRepos();
