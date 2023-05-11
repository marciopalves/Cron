const SendMailDaily = require("./cron/SendMailsDaily");


class ManagerCron{
    constructor(){
        this.job = [SendMailDaily]
    }
    
    run(){
        this.job.forEach( job => job.start());
    }
}

module.exports = new ManagerCron();