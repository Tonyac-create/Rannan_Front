import { useApi } from "../hooks/useApi";
const api = useApi();

export async function signIn(){
    try{
        const response = await api.post('/auth/register');
        return response
    }
    catch(error){
        return error
    }
}

export async function logIn(){
    try{
        const response = await api.post('/auth/login');
        return response
    }
    catch(error){
        return error
    }
}

export async function refreshToken(){
    try{
        const response = await api.get('/auth/refreshToken');
        return response
    }
    catch(error){
        return error
    }
}

export async function logOut(){
    try{
        const response = await api.put('/auth/disconnect');
        return response
    }
    catch(error){
        return error
    }
}