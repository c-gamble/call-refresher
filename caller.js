require('dotenv').config({ path: './.env' });

var CronJob = require('cron').CronJob;
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const call = new CronJob(
    '* * */10 * *', 
    client.calls
    .create({url: 'http://demo.twilio.com/docs/voice.xml', from: '+13464895614', to: '+15072990714'})
    .then(call => console.log(call.sid))
    .catch(error => console.log(error)),
    null,
    true
)
call.start()