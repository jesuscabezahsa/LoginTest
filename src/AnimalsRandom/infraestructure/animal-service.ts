import loginTestApi from '../../shared/utils/axios';
import { getItemFromLocalStorage } from '../../shared/utils/local-storage-util';
import { AnimalResponse } from './AnimalResponse';


export const getAnimalRandom = ()  => {
    return loginTestApi.get<AnimalResponse>('/randomAnimal', { headers: { Authorization: `Bearer ${getItemFromLocalStorage('token')}` } });    
}    
    