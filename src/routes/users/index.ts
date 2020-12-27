import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { Logger } from '@/utils/logger';

interface UserCreateBody {
  name: string;
  email: string;
}

export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, next: any) {
  fastify.post<{ Body: UserCreateBody }>('/create', async function (request, reply) {
    Logger.getInstance(request.headers)
    const { name, email } = request.body;

    // user を作るような処理
    try {
      const userId = create(name, email);
      reply.code(200).type('application/json').send(userId);
    } catch (e) {
      Logger.error('予期せぬエラーが発生しました', { message: e.message });
      // 予期していない例外
      reply.code(500).send('Internal Server Error.');
    }
  });
}

const create = (name: string, email: string): String => {
  return 'userId';
}