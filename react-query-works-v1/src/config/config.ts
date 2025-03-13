import { QueryClient } from "@tanstack/react-query";

const LOCAL_SERVER = "http://localhost";
const JSON_SERVER_PORT = 8000;

export const API_BASE_URL = `${LOCAL_SERVER}:${JSON_SERVER_PORT}`;

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 3, retryDelay: 1000 },
  },
});
