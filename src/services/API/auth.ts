import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function signIn(body: any){
    try{
        const response = await api.post('/auth/register', body);
        const { token, refreshToken } = response.data
        if (token !== undefined && refreshToken !== undefined) {
            localStorage.setItem("authToken", token)
            localStorage.setItem("authRefreshToken", refreshToken)
        }
        return ({
            message: "signIn OK",
            status: true,
            data: response.data.updatedUser
        })
    }
    catch(error){
        return ({
            message: "signIn KO",
            status: false,
            data: error
        })
    }
}

export async function logIn(body: any){
    try{
        const response = await api.post('/auth/login', body);
        const { token, refreshToken } = response.data
        if (token !== undefined && refreshToken !== undefined) {
            localStorage.setItem("authToken", token)
            localStorage.setItem("authRefreshToken", refreshToken)
        }
        return ({
            message: "logIn OK",
            status: true,
            data: response.data.updatedUser
        })
    }
    catch(error){
        return ({
            message: "logIn KO",
            status: false,
            data: error
        })
    }
}

export async function refreshToken(){
    try{
        const response = await api.get('/auth/refreshToken');
        return ({
            message: "refreshToken OK",
            status: true,
            data: response
        })
    }
    catch(error){
        return ({
            message: "refreshToken KO",
            status: false,
            data: error
        })
    }
}

export async function logOut(){
    try{
        const response = await api.put('/auth/disconnect');
        localStorage.removeItem("authToken")
        localStorage.removeItem("authRefreshToken")
        window.location.href = "/login"
        return ({
            message: "logOut OK",
            status: true,
            data: response
        })
    }
    catch(error){
        return ({
            message: "logOut OK",
            status: false,
            data: error
        })
    }
}