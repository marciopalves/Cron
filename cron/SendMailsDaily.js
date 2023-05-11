const cron = require('node-cron');

function SendMailDaily(){
    console.log(`Email sendo enviado ...`);
}

module.exports = cron.schedule('*/1 * * * *', SendMailDaily, {
    scheduled: false
});