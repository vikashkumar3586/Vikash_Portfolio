require('dotenv').config({path: '../.env'}); 

/*
// way to load dotenv in a more controlled manner also for debugging
const dotenv = require('dotenv');
const result = dotenv.config({ path: '../.env' });

if (result.error) {
  console.error("❌ dotenv load error:", result.error);
} else {
  console.log("✅ dotenv loaded successfully");
}
*/

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const getCgpa = require('./controllers/getCgpa');
const getStars = require('./controllers/getStars');
const sendEmail = require('./controllers/sendEmail');
const getProjects = require('./controllers/getProjects');
const getCodeCount = require('./controllers/getCodeCount');
const getLastPlayed = require('./controllers/getLastPlayed');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); //useful for form submissions

// home route handlers
app.get('/', (req, res) => {
  res.json({ message: 'Welcome Developer.' });
});

app.get('/api/cgpa', getCgpa);
app.post('/dev/connect', sendEmail);
app.get('/dev/projects', getProjects);
app.get('/codechef/:username', getStars);
app.get('/dev/lastPlayed', getLastPlayed);
app.get('/leetcode/:username/solved', getCodeCount);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

