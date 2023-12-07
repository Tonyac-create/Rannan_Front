import axios, { AxiosInstance } from "axios";
import { getRefreshToken } from "../services/api/auth";

export function useApi() {

  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": 'http://localhost:5173',
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

    async (error) => {

        if (error.response && error.response.status === 401) {

            const originalRequest = error.config;
            // pour éviter boucle infinie du refreshToken
            if (!originalRequest._retry) {
                originalRequest._retry = true;
            }

            const refreshToken = localStorage.getItem('refreshToken');

            if (refreshToken) {
                try {
                    const result = await getRefreshToken();

                    localStorage.setItem('accessToken', result.data.tokens.accessToken);
                    localStorage.setItem('refreshToken', result.data.tokens.refreshToken);

                    originalRequest.headers['Authorization'] = 'Bearer' + result.data.tokens.accessToken;
                    
                    return axios(originalRequest);
                } catch (error) {
                    // Supprimer tous les Tokens du localstorage
                    localStorage.removeItem('accessToken')
                    //TODO Renvoyer vers la page des login 
                }
            } else {
                // Supprimer tous les Tokens du localstorage
                localStorage.removeItem('accessToken')
                //TODO Supprimer tous les Tokens du localstorage
                //TODO Renvoyer vers la page des login 
            }
        }

        if (error.response && error.response.status === 500) {

        }
        

        return Promise.reject(error)
    }
  );

  return api
}