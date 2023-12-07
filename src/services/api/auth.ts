import axios from "axios";
import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function signIn(body: any){
    try{
        const response = await axios.post('/auth/register', body);
        if (response.data.status === 201) {
            localStorage.setItem("validationToken", response.data.data)
        }
        return ({
            status: true,
            data: response.data
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}

export async function validationMail(body: {email: string}) {
    try {
        const received = await axios.post('/user/validation/mail', body);
        const response = received.data
        return response
    } catch (error) {
        return ({
            status: false,
            data: error
        })
    }
}

export async function returnValidation(body: {email: string}){
    try{
        const received = await axios.post('/user/return/validation', body);
        const response = received.data
        return response
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}

export async function logIn(body: any){
    try{
        const response = await axios.post('/auth/login', body);
        const { token, refreshToken, user } = response.data
        if (token !== undefined && refreshToken !== undefined) {
            localStorage.setItem("authToken", token)
            localStorage.setItem("authRefreshToken", refreshToken)
            localStorage.setItem("user.avatar", user.avatar_id)
            localStorage.setItem("user.nickname", user.nickname)
            localStorage.setItem("user.id", user.id)
            localStorage.setItem("user.email", user.email)
        }
        return ({
            status: true,
            data: response.data
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}

export async function getRefreshToken(){
    const refreshToken = localStorage.getItem('refresh-token')
    const headers = { Authorization : "Bearer " + refreshToken }

    try {
        const {data} = await axios.get(import.meta.env.VITE_API_BASE_URL + 'api/refreshToken', {headers});
        console.log(data)
        return ({
            status: true,
            data: data
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}

export async function logOut(){
    try{
        const response = await api.put('/api/auth/disconnect');
        localStorage.removeItem("authToken")
        localStorage.removeItem("authRefreshToken")
        localStorage.removeItem("user.nickname")
        localStorage.removeItem("user.avatar")
        localStorage.removeItem("user.id")
        localStorage.removeItem("user.email")
        return ({
            status: true,
            data: response
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}