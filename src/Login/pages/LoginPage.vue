<script setup lang='ts'>
import { ref, watch } from 'vue';
import { useLogin } from '../aplication/useLogin';
import { User } from '../domain/User';
import { LoginResponse } from '../infrastructure/LoginResponse';
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { setItemToLocalStorage } from '../../shared/utils/local-storage-util';

const router = useRouter()

const loginForm = ref<User>({ username: '', password: '', otp: '',})
const loginResponse = ref<LoginResponse>({ message: '', token: ''})

const userNameOrPasswordChanged = ref(false)
const currentUserName = ref('')
const currentPassword = ref('')
const isTimeForErrorMessage = ref(true)

const messageIsRelatedCode = computed(() => {
    return loginResponse.value.message === 'otp required' || loginResponse.value.message === 'code is wrong'
})

const showCode = computed(() => {
    return messageIsRelatedCode.value && !userNameOrPasswordChanged.value
})

const showErrorMessage = computed(() => {
    return loginResponse.value.message !== 'success'
})

const submitForm = () => {
    isTimeForErrorMessage.value = true
    loginResponse.value = useLogin(loginForm.value)
    currentUserName.value = loginForm.value.username
    currentPassword.value = loginForm.value.password
    setTimeout(() => {
        isTimeForErrorMessage.value = false
    }, 3000)
} 

const onChangeUsername = (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    if (messageIsRelatedCode.value) {
        userNameOrPasswordChanged.value = currentUserName.value !== value
    } 
}

const onChangePassword = (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    if (messageIsRelatedCode.value) {
        userNameOrPasswordChanged.value = currentPassword.value !== value
    }
}

watch(showErrorMessage, (newValue:boolean) => {
    if(newValue === false ) {
        const {token} = loginResponse.value
        setItemToLocalStorage('token', token)
        router.push({ name: 'AnimalRandom' })
    }
})

</script>

<template>
    <div class="login-page">
        <div class="login-page_header">
            <h2 class="login-page_header__title">LOGIN</h2>
            <p v-if="showErrorMessage && isTimeForErrorMessage" class="login-page_header__error-message">{{ loginResponse.message }}</p>
        </div>
        <form class="login-form" @submit.prevent="submitForm">
            <div class="login-form_group">
                <label for="username"  class="login-form_group__label">Username</label>
                <input 
                    type="username" 
                    class="login-form_group__input" 
                    id="username" 
                    v-model="loginForm.username"
                    required
                    @input="onChangeUsername($event)">
            </div>
            <div class="login-form_group">
                <label for="password" class="login-form_group__label">Password</label>
                <input 
                    type="password" 
                    class="login-form_group__input" 
                    id="password" 
                    v-model="loginForm.password"
                    required
                    @input="onChangePassword($event)">
            </div>
            <div v-if="showCode" class="login-form_group">
                <label for="code" class="login-form_group__label">Code</label>
                <input 
                    type="text" 
                    id="code" 
                    class="login-form_group__input" 
                    v-model="loginForm.otp">
            </div>
            <button class="general-primary-button">LOGIN</button>
        </form>
    </div>
</template>


<style scoped>
.login-page {
    padding: 2rem 20% 10rem;
    height: auto;
    display: flex;
    flex-direction: column;
}
.login-page_header {
    text-align: center;
    margin-bottom: 1rem;
}
.login-page_header__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
.login-page_header__error-message {
    color: var(--red-te);
    font-size: 0.8rem;
    font-weight: 500;
}
.login-form_group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.login-form_group__label {
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
}
.login-form_group__input {
    padding: 0.5rem;
    border: 0.5px solid var(--light-purple);
    border-radius: 0.2rem;
    font-size: 0.8rem;
    width: 100%;
}

</style>