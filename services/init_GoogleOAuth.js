const { google } = require('googleapis');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } = require('../config');
const axios = require('axios');

const OAuth_Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL
);

const getGoogleOAuthURL = () =>
    OAuth_Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: [
            `https://www.googleapis.com/auth/userinfo.email`,
            `https://www.googleapis.com/auth/userinfo.profile`
        ]
    });

const getGoogleUser = async ({ code }) => {
    const { tokens } = await OAuth_Client.getToken(code);

    try {
        const res = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${tokens.id_token}`
                }
            }
        );

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getGoogleOAuthURL, getGoogleUser };
