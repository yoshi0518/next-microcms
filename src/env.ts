import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    ENV: z.enum(['prod', 'dev']).default('dev'),
    DEBUG: z.string().default('true'),
    MICROCMS_SERVICE_DOMAIN: z.string(),
    MICROCMS_API_KEY: z.string(),
  },
  client: {
    // NEXT_PUBLIC_xxxxx: z.string(),
  },
  runtimeEnv: {
    ENV: process.env.ENV,
    DEBUG: process.env.DEBUG,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
