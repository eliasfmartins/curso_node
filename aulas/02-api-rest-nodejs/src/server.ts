import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactiions'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE
app.register(transactionsRoutes)
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running !')
  })
