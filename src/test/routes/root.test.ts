import { test } from 'tap';
import { build } from '@/test/helper';

test('default root route', async (t) => {
  const app = build(t)

  const response = await app.inject({
    url: '/'
  })
  t.equal(response.statusCode, 404)
  t.equal(response.body, "NotFound.")
})