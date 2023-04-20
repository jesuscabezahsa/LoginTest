import loginTestApi from '../../shared/utils/axios';
import { getItemFromLocalStorage } from '../../shared/utils/local-storage-util';
import { User } from '../domain/User';
import { LoginResponse } from './LoginResponse';


export const isAutenticated = () => {  
    return  getItemFromLocalStorage('token') ? true : false;
}

export const login = (user: User)  => {
    return loginTestApi.post<LoginResponse>('/login', user);    
}    
    


