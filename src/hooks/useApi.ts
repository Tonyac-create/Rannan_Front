import axios, { AxiosInstance } from "axios";

export function useApi() {

  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": 'http://localhost:5173', //à regarder
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken")
    if (token && token !== undefined && token !== null) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  });

// Traitement de toutes les erreurs possibles
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        "OUPS INTERCEPTORS ERROR"
      }
      if (error.message === "Network Error") {
        "OUPS NETWORK ERROR"
      }
      return Promise.reject(error)
    }
  );

  return api
}