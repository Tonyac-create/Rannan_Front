import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function createGroup(){
    try{
        const response = await api.post('/api/group');
        return response
    }
    catch(error){
        return error
    }
}

export async function getAllMemberGroupList(){
    try{
        const response = await api.get('/api/groups/member');
        return response
    }
    catch(error){
        return error
    }
}

export async function getCreatorGroupList(){
    try{
        const response = await api.get('/api/groups/creator');
        return response
    }
    catch(error){
        return error
    }
}

export async function getGroupDetail(id: string){
    try{
        const response = await api.get(`/api/group/${id}`);
        return response
    }
    catch(error){
        return error
    }
}

export async function removeGroup(id: string){
    try{
        const response = await api.delete(`/api/group/${id}`);
        return response
    }
    catch(error){
        return error
    }
}

export async function getGroupDetailForSetting(id: string){
    try{
        const response = await api.get(`/api/group/${id}/setting`);
        return response
    }
    catch(error){
        return error
    }
}

export async function updateGroup(id: string){
    try{
        const response = await api.put(`/api/group/${id}`);
        return response
    }
    catch(error){
        return error
    }
}

export async function addMemberGroup(id: string){
    try{
        const response = await api.put(`/api/group/${id}/add`);
        return response
    }
    catch(error){
        return error
    }
}

export async function removeMember(id: string){
    try{
        const response = await api.delete(`/api/group/${id}/remove`);
        return response
    }
    catch(error){
        return error
    }
}