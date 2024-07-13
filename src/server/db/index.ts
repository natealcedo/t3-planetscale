import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "@/env";

const client = new Client({
  host: env.PLANETSCALE_HOST,
  username: env.PLANETSCALE_USERNAME,
  password: env.PLANETSCALE_PASSWORD,
});

export const db = drizzle(client);
