import { reactive  } from "vue";
import { login } from "../infrastructure/autentication-service";
import { LoginResponse } from "../infrastructure/LoginResponse";
import { User } from "../domain/User";
import { AxiosError } from "axios";

export const useLogin = (user: User) => { 
    let rtaLogin = reactive<LoginResponse>({ message: '', token: '' });
    
    login(user)
    .then((response) => {
        rtaLogin.message = response.data.message;
        rtaLogin.token = response.data.token;
    })
    .catch((error: AxiosError) => {
        rtaLogin.message = (error.response?.data as LoginResponse).message;
    });
        
      
    return rtaLogin;
}