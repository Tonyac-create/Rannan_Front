import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function getAllContacts(){  // Récuperer tous les contacts d'un user
    try{
        const response = await api.get('/api/contacts');
        return response
    }
    catch(error){
        return error
    }
}

export async function deleteContact(id: string){  // supprimer un contact id=contact_id
    try{
        const response = await api.delete(`/api/contact/${id}`);
        return response
    }
    catch(error){
        return error
    }
}

export async function createContact(){  // Créer un contact entre 2 users
    try{
        const response = await api.post('/api/contact');
        return response
    }
    catch(error){
        return error
    }
}

export async function deleteValidation(id: string){  // supprimer un contact id=validation_id
    try{
        const response = await api.delete(`/api/validation/${id}`);
        return response
    }
    catch(error){
        return error
    }
}

export async function createValidation(){  // Créer une demande de contact entre 2 users
    try{
        const response = await api.post('/api/validation');
        return response
    }
    catch(error){
        return error
    }
}

export async function getAllValidations(){  // Récuperer toutes les demandes de contact d'un user
    try{
        const response = await api.get('/api/validations/user');
        return response
    }
    catch(error){
        return error
    }
}