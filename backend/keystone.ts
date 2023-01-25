import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/my-store-cluster';

const sessionConfig = { age: 3600, secret: process.env.COOKIE_SECRET };

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
});

export default withAuth(
  config({
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
    lists: createSchema({
      User,
      Product,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ui: { isAccessAllowed: ({ session }) => !!session?.data },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
