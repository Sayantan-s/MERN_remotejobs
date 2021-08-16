const { google } = require('googleapis');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } = require('../config');
const https = require('https');

const OAuth_Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL
)

const getGoogleOAuthURL = () => OAuth_Client.generateAuthUrl({
    access_type : 'offline',
    prompt: 'consent',
    scope : [
        `https://www.googleapis.com/auth/userinfo.email`,
        `https://www.googleapis.com/auth/userinfo.profile`
    ]
})

const getGoogleUser = ({ code }) => {

    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports = { getGoogleOAuthURL, getGoogleUser };