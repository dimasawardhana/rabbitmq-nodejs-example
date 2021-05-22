const amqpInstance = require('../client/amqp').default;

(async ()=>{
    const client = await amqpInstance()
    const channel = await client.createChannel()
    const queue = "prod-cons"
    const msg = "cek"
    await channel.assertQueue(queue, {
        durable : false
    })
    channel.consume(queue, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
      }, {
          noAck: true
        });
    // await client.close()
    // process.exit(0)
})()