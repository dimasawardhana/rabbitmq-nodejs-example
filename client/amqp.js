const amqp = require('amqplib');
let amqp_client;

async function amqpInstance(){
    if(!amqp_client){
        amqp_client = await amqp.connect('amqp://localhost:5672')
        return amqp_client
    }else{
        return amqp_client
    }
}

exports.default = amqpInstance;