const fs = require('fs');
const path = require('path');

async function saveToEnv(key, value) {
    const envFilePath = path.join(__dirname, '../../.env');

    // Read the current contents of the .env file
    let envContent = fs.readFileSync(envFilePath, 'utf8');

    // Create a regular expression to find the key in the .env file
    const regex = new RegExp(`^${key}=.*`, 'm');

    // If the key already exists, replace its value; otherwise, append it
    if (regex.test(envContent)) {
        envContent = envContent.replace(regex, `${key}=${value}`);
    } else {
        envContent += `\n${key}=${value}`;
    }

    // Write the updated content back to the .env file
    fs.writeFileSync(envFilePath, envContent, 'utf8');
}

module.exports = saveToEnv;