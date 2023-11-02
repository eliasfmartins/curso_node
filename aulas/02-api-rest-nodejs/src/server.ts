import fastify from 'fastify'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', () => {
  return 'Hello Worlds'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running !')
  })