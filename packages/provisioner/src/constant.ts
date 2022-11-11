const envVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`missing environment variable ${name}`);
  }
  return value;
};

export const FLY_API_TOKEN = envVar("FLY_API_TOKEN");
export const FLY_ORG_ID = envVar("FLY_ORG_ID");
export const FLY_REGION = envVar("FLY_REGION");
