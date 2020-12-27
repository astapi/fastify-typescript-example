import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import example from '@/routes/example/index'
// import admin from 'firebase-admin'
require('dotenv').config()

export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, next: any) {
  // if (!admin.apps.length) {
  //   admin.initializeApp();
  // }

  fastify.get('/ping', async (request, reply) => {
    return 'pong\n'
  })
  fastify.get('/', async (request, reply) => {
    reply.code(404).send('NotFound.')
    return;
  })
  fastify.register(example, { ...opts, prefix: '/example' });
  next();
}