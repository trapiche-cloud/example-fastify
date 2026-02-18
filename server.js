const Fastify = require('fastify')

const fastify = Fastify({ logger: true })
const PORT = process.env.PORT || 3000

let counter = 0

fastify.get('/', async () => {
  return { app: 'example-fastify', framework: 'fastify' }
})

fastify.get('/counter', async () => {
  return { count: counter }
})

fastify.post('/counter/increment', async () => {
  counter++
  return { count: counter }
})

fastify.post('/counter/decrement', async () => {
  counter--
  return { count: counter }
})

fastify.listen({ port: Number(PORT), host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
