const amqpInstance = require('../client/amqp').default;

(async ()=>{
    const client = await amqpInstance()
    const channel = await client.createChannel()
    const queue = "prod-cons"
    const msg = "cek"
    channel.assertQueue(queue, {
        durable : false
    })
    await channel.sendToQueue(queue, Buffer.from(msg))
    console.log("send cek produce")
    await channel.close()
    client.close()
    process.exit(0)
})()

