const amqpInstance = require('../client/amqp').default;

(async ()=>{
    const client = await amqpInstance()
    const channel = await client.createChannel()
    const queue = "work-queues"
    const msg = "cek"
    var n = 1
    await channel.assertQueue(queue, {
        durable : true // if true, message in queue wont be lost if server dies
    })
    console.log("Ready to receive message");
    channel.prefetch(n); // will accept only n message in the worker.
    channel.consume(queue, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
      }, {
          noAck: true // true if it need not acknowledgement message
        });
})()