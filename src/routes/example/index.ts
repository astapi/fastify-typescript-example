import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { Logger } from '@/utils/logger';

export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, next: any) {
  fastify.get('/', async function (request, reply) {
    Logger.getInstance(request.headers)
    console.log('aaaaaaaaa');
    Logger.log('this is an example log.');
    return 'this is an example.'
  })

  next()
}