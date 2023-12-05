import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function userConnected(){
    try{
        const received = await api.get('/api');
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function resetPassword(body: any){
    try{
        const received = await api.post('/user/reset', {email: body});
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function returnResetPassword(body: any){
    try{
        const received = await api.post('/user/return/reset', body);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function checkPassword(body: any){
    try{
        const received = await api.put('/api/checkPassword', body);
        const response = received.data
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
        const received = await api.put('/api/user/password', body);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function getProfile(id: string | undefined){
    try{
        const received = await api.get(`/api/user/profile/${id}`);
        const response = received.data
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
        const received = await api.delete('/api/user');
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function getUserRelation(id: string | undefined){
    try{
        const response = await api.get(`/api/user/relation/${id}`);
        return response.data
    }
    catch(error){
        return error
    }
}