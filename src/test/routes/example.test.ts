import { test } from 'tap';
import { build } from '@/test/helper';

test('example is loaded', async (t) => {
  const app = build(t)

  const response = await app.inject({
    url: '/example'
  })
  t.strictEqual(response.statusCode, 200, 'status code of 200')
  t.equal(response.payload, 'this is an example.', 'payload ok.')
})