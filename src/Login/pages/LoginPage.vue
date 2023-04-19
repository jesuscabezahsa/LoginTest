<script setup lang='ts'>
</script>

<template>
    <div class="login-page">
        <div class="login-page_header">
            <h2 class="login-page_header__title">LOGIN</h2>
            <p class="login-page_header__error-message">Error message</p>
        </div>
        <form action="" class="login-form">
            <div class="login-form_group">
                <label for="username"  class="login-form_group__label">Username</label>
                <input type="username" class="login-form_group__input" id="username">
            </div>
            <div class="login-form_group">
                <label for="password" class="login-form_group__label">Password</label>
                <input type="password" class="login-form_group__input" id="password" >
            </div>
            <div class="login-form_group">
                <label for="code" class="login-form_group__label">Code</label>
                <input type="code" id="code" class="login-form_group__input" >
            </div>
            <button class="login-form_button">LOGIN</button>
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
.login-form_button {
    padding: 0.5rem;
    border: 0.5px solid var(--picton-blue);
    border-radius: 0.2rem;
    font-size: 0.8rem;
    width: 100%;
    background-color: var(--sky-blue);
    color: var(--baby-blue);
    font-weight: 600;
    margin-top: 1rem;
}
</style>