export const getEnv = (key: string, fallbackValue = ''): string => {
  const value: string | undefined = process.env[key];
  if (typeof value === 'undefined') {
    return fallbackValue;
  }
  return value;
};

export const getEnvNumber = (key: string, fallbackValue = 0): number => {
  const value: string = getEnv(key);
  return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
};

export const getEnvBoolean = (key: string, fallbackValue = false) => {
  const value: string = getEnv(key);
  return value === '' ? fallbackValue : value === 'true';
};

export const getEnvObject = (key: string, fallbackValue: object = null) => {
  const value: string = getEnv(key);
  if (!value) {
    return fallbackValue;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return fallbackValue;
  }
};
