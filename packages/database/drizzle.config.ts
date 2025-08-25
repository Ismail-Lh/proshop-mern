import 'dotenv/config';
import { defineConfig } from "drizzle-kit";

import {envConfig} from "./src/env";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: envConfig.db.db_url,
  },
});
