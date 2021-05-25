const amqpInstance = require('../client/amqp').default;

(async ()=>{
    const client = await amqpInstance()
    const channel = await client.createChannel()
    const queue = "work-queues"
    const msg = "cek"
    await channel.assertQueue(queue, {
        durable : true
    })
    console.log("Ready to receive message");
    channel.consume(queue, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
      }, {
          noAck: true
        });
})()