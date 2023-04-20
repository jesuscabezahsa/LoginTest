<script setup lang='ts'>
import { ref } from 'vue';
import { useGetAnimalRandom } from '../aplication/useGetAnimalRandom';
import { AnimalRandom } from '../domain/AnimalRandom';
import { useLogout } from '../aplication/useLogout';
import { useRouter } from 'vue-router';


const router = useRouter()
const animal = ref<AnimalRandom>({
  name: '',
  img: '',
});

const getAnimalRandom = () => {
  animal.value = useGetAnimalRandom()
}

const logOut = () => {
  useLogout()
  router.push({ name: 'Login' })
}

</script>

<template>
   <div class="animal-page">
      <section class="section animal-page_animal">
        <button class="general-primary-button animal-page_animal__button" @click="getAnimalRandom()">RANDOM ANIMAL</button>
        <article v-if="animal.name !==''" class="animal-page_animal__data">
            <p class="animal-page_animal__data__name">{{animal.name}}</p>
            <img class="animal-page_animal__data__img" :src="animal.img" alt="Imagen del animal">
        </article>
      </section>
      <section class="section animal-page_logout">
        <div class="animal-page_logout__button" @click="logOut()">
            <img class="animal-page_logout__icon" src="../../../assets/logout-icon.svg" alt="">
        </div>
    </section>
    </div>
</template>


<style scoped>
.animal-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 94vh;
  padding: 2rem 5% 2rem;
}

.section {
  flex: 50%;
}

.animal-page_animal {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.animal-page_animal__button {
    margin-bottom: 1rem;
}

.animal-page_animal__data {
  margin-top: 1rem;
}

.animal-page_animal__data__name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: center;
}
.animal-page_animal__data__img {
  max-width: 25rem;
}
.animal-page_logout {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}

.animal-page_logout__button {
  background-color: var(--sky-blue);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
.animal-page_logout__icon {
   position: relative;
   left: 25%;
   top: 25%; 
}

</style>