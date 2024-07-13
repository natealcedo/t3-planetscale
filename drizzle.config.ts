import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    user: env.PLANETSCALE_USERNAME,
    password: env.PLANETSCALE_PASSWORD,
    host: env.PLANETSCALE_HOST,
    database: "t3",
    port: 3306,
  },
} satisfies Config;
