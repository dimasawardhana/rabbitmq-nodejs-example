const amqpInstance = require('../client/amqp').default;
(async ()=>{
    const client = await amqpInstance()
    const channel = await client.createChannel()
    const queue = "work-queues"
    const msg = process.argv.slice(2).join(" ") ||"cek"
    channel.assertQueue(queue, {
        durable : true
    })
    await channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true // message will be saved in disk also if true
    })
    console.log("send new task")
    await channel.close()
    client.close()
    process.exit(0)
})()

