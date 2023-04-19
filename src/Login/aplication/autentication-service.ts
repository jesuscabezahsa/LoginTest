
import {getItemFromLocalStorage} from '../../shared/utils/local-storage-util';

export const isAutenticated = () => {  
    return  getItemFromLocalStorage('token') ? true : false;
}


