import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', async () => {
  // const transactions = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transacao de teste',
  //     amount: 1000,
  //   })
  //   .returning('*')
  const transactions = await knex('transactions').where('amount', 1000)
  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running !')
  })
