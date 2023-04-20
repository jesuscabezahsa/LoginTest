import { reactive  } from "vue";
import { AnimalResponse } from "../infraestructure/AnimalResponse";
import { getAnimalRandom } from "../infraestructure/animal-service";

export const useGetAnimalRandom = () => { 
    let animalRandom = reactive<AnimalResponse>({animal: {name: '', img: ''}});
    
    getAnimalRandom()
        .then((response) => {
        console.log(response.data.animal);
        animalRandom.animal.img = response.data.animal.img;
        animalRandom.animal.name = response.data.animal.name;
    })
    
    return animalRandom.animal;
}