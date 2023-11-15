import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function userConnected(){
    try{
        const response = await api.get('/api');
        return response
    }
    catch(error){
        return error
    }
}

export async function getEmail(){
    try{
        const response = await api.get('/api/user/account');
        return response
    }
    catch(error){
        return error
    }
}

export async function resetPassword(){
    try{
        const response = await api.get('/user/reset');
        return response
    }
    catch(error){
        return error
    }
}

export async function updateUser(body: any){
    try{
        const response = await api.put('/api/user/account', body);
        return response
    }
    catch(error){
        return error
    }
}

export async function updatePassword(body: any){
    try{
        const response = await api.put('/api/user/password', body);
        console.log(response)
        return response
    }
    catch(error){
        return error
    }
}

export async function getProfile(id: string | undefined){
    try{
        const response = await api.get(`/api/user/profile/${id}`);
        return response
    }
    catch(error){
        return error
    }
}

export async function userSearch(body: any){
    try{
        const response = await api.post('/api/user/search', body);
        return response
    }
    catch(error){
        return error
    }
}

export async function removeUser(){
    try{
        const response = await api.delete('/api/user');
        return response
    }
    catch(error){
        return error
    }
}