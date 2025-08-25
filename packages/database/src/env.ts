import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const stringBoolean = z.coerce.string().transform((val) => {
  return val === "true";
}).default(false);

const envSchema = z.object({
  DB_URL: z.string({ message: "DB_URL must be a string" }),
  DB_MIGRATING: stringBoolean,
  DB_SEEDING: stringBoolean,
  DB_LOGGING: stringBoolean,
});

type EnvSchema = z.infer<typeof envSchema>;

function validateEnv(env: NodeJS.ProcessEnv): EnvSchema {
  try {
    return envSchema.parse(env);
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        issue => `${issue.path.join(".")}: ${issue.message}`,
      );
      throw new Error(
        `Environment variable validation error: \n${errorMessages.join("\n")}`,
      );
    }
    throw error;
  }
}

// eslint-disable-next-line node/no-process-env
const validatedEnv = validateEnv(process.env);

export const envConfig = {
  db: {
    db_url: validatedEnv.DB_URL,
    db_migrating: validatedEnv.DB_MIGRATING,
    db_seeding: validatedEnv.DB_SEEDING,
    db_logging: validatedEnv.DB_LOGGING,
  }
} as const;
