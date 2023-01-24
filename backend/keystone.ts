import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/my-store-cluster';

const sessionConfig = { age: 3600, secret: process.env.COOKIE_SECRET };

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
  },
  lists: createSchema({}),
  ui: { isAccessAllowed: () => true },
});
