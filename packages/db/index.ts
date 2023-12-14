import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true

import * as post from './schema/post'

export const schema = { ...post }

export { myPgTable as tableCreator } from './schema/_table'

export * from 'drizzle-orm'

export const db = drizzle(neon(process.env.DATABASE_URL!), { schema })
