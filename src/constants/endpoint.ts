const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) ?? "";

const ENDPOINT = {
  TEST: `${API_BASE_URL}/test`,
  PREDICT: `${API_BASE_URL}/predict`,
  HEALTH: `${API_BASE_URL}/health`,
} as const;

export const ROUTES = {
  APP_ROOT: "/",
  UPLOAD: "/upload",
  RESULT: "/result",
  SIGNUP: "/signup",
  LOGIN: "/login",
} as const;

export default ENDPOINT;
