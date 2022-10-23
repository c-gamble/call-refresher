require('dotenv').config({ path: './.env' });

const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
.create({url: 'http://demo.twilio.com/docs/voice.xml', from: '+13464895614', to: '+15072990714'})
.then(call => console.log(call.sid))
.catch(error => console.log(error));