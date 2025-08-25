import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { envConfig } from "./env";

export const client = postgres(envConfig.db.db_url, {
  max: (envConfig.db.db_migrating || envConfig.db.db_seeding) ? 1 : undefined,
  onnotice: envConfig.db.db_seeding ? () => {} : undefined,
});

export const db = drizzle(client);
