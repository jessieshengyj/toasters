
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function sendSMS(to, body) {
    try {
        const message = await client.messages.create({
            body: body,
            from: '+12345678876',
            to: to
        });
        console.log('Message sent:', message.sid);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

module.exports = sendSMS;
