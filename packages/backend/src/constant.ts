const envVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`missing environment variable ${name}`);
  }
  return value;
};

export const SESSION_SECRECT = envVar("SESSION_SECRET");
export const GITHUB_CLIENT_ID = envVar("GITHUB_CLIENT_ID");
export const GITHUB_CLIENT_SECRET = envVar("GITHUB_CLIENT_SECRET");
export const PORT = envVar("PORT");
export const REDIS_URL = envVar("REDIS_URL");
