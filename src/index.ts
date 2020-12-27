
import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import fastifyCors from 'fastify-cors';
import App from '@/app';

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

// plugins
server.register(fastifyCors, {
  origin: [/localhost/, /.*.ngrok.io/]
})

// Rooting
server.register(App)

const PORT = process.env.PORT || 3030;
// Listen
server.listen(PORT, '0.0.0.0', (err, address) => {
  if(err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})