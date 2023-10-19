import axios, { AxiosInstance } from "axios";

export function useApi() {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*" //à regarder
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.API_BASE_URL,
    headers
  });

  return api
}