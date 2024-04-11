import { useApi } from "../../hooks/useApi"
const api = useApi();

export async function getOneDataById(id: string) {  // Récupère une data par son id
    try {
        const response = await api.get(`/api/data/${id}`)
        return response
    }
    catch (error) {
        return ({
            status: false,
            data: error
        })
    }
}

export async function getUserDatas() {  // Récupère des datas avec son user_id (recupéré du token en back)
    try {
        const response = await api.get('/api/datas')
        return response
    }
    catch (error) {
        return ({
            status: false,
            data: error
        })
    }
}

export async function updateData(id: string, body: any) {  //MaJ d'une data id= data_id
    try {
        const response = await api.put(`/api/data/${id}`, body)
        return response
    }
    catch (error) {
        return error
    }
}

export async function removeData(id: string | undefined) {  //supression d'une data id= data_id
    try {
        const response = await api.delete(`/api/data/${id}`)
        return response
    }
    catch (error) {
        return error
    }
}

export async function createData(body: {}) {  //créer une data
    try {
        const response = await api.post('/api/data', body)
        return response
    }
    catch (error: any) {
        console.log("🚀 ~ createData ~ error:", error)
        if (error.response.status === 500) {
            console.error('Erreur lors de la création de la data : une erreur interne du serveur est survenue.');
        } else {
            console.error('Erreur inattendue lors de la création de la data.');
        }
    }
}

export async function getListUsersGroups(target: any) { // Récupération de liste users ou groups
    try {
        const received = await api.post(`/api/datas/shares`, { target });
        const response = received.data
        return response
        // if (response.data) {
        //     return ({
        //         status: true,
        //         data: response.data
        //     })
        // }
        // throw "data not received"
    }
    catch (error) {
        return error
    }
}

export async function getShares(target_id: string | number, target: string) { // Récupérer une liste des datas partagé avec l’utilisateur ou le groupe lié
    try {
        const response = await api.post('/api/datas/target', { target_id, target })
        return response
    }
    catch (error) {
        return error
    }
}

export async function getSharesBetweenUsers(userId_profile: number) {
    try {
        const response = await api.post('/api/datas/profile', { userId_profile });
        return response
    }
    catch (error) {
        return error
    }
}

export async function createShare(
    target_id: number,
    data_id: string,
    target: string
) { // Création d'un partage
    try {
        const response = await api.post('/api/shares', { target_id, data_id, target });
        return response
    }
    catch (error) {
        return error
    }
}

export async function removeShare(id: string) {  // Supprimer un partage id= share.id
    try {
        const response = await api.delete(`/api/share/${id}`);
        return response
    }
    catch (error) {
        return error
    }
}

export async function removeDataInShare(share_id: string, data_id: string) {
    try {
        const response = await api.delete(`/api/datainshare/${share_id}/${data_id}`);
        return response
    }
    catch (error) {
        return error
    }
}

export async function getAllShares() {  // Récuperer tous les partages
    try {
        const response = await api.get('/api/allshares');
        return response
    }
    catch (error) {
        return error
    }
}

export async function getShareById(id: string) {
    try {
        const response = await api.get(`/api/share/${id}`)
        return response
    } catch (error) {
        return error
    }
}

export async function removeShareByUsers(id: number) {
    try {
        const response = await api.delete(`/api/share/user/${id}`)
        return response
    }
    catch (error) {
        return error
    }
}