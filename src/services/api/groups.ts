import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function createGroup(body: any){
    try{
        const received = await api.post('/api/group', body);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

// 14
export async function getUserGroupList(){
    try{
        const received = await api.get('/api/groups/member');
        const response = received.data
        if ( response.statut === 400 ) {
            return ({
                status: false,
                data: response
            })
        }
        return response
    }
    catch(error){
        return error
    }
}

export async function getCreatorGroupList(){
    try{
        const received = await api.get('/api/groups/creator');
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function getGroupDetail(id: string){
    try{
        const received = await api.get(`/api/group/${id}`);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function removeGroup(id: string){
    try{
        const received = await api.delete(`/api/group/${id}`);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function getGroupDetailForSetting(id: string){
    try{
        const received = await api.get(`/api/group/${id}/setting`);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function updateGroup(id: string, body: any){
    try{
        const received = await api.put(`/api/group/${id}`, body);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function addMemberGroup(id: string, body: any){
    try{
        const received = await api.put(`/api/group/${id}/add`, body);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}

export async function removeMemberGroup(id: string, body: any){
    try{
        const received = await api.put(`/api/group/${id}/remove`, body);
        const response = received.data
        return response
    }
    catch(error){
        return error
    }
}