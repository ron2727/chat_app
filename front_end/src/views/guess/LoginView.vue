<template>
    <form @submit.prevent="loginSubmit" class="space-y-4">
        <title-form title="Login in to your account" subtitle="Welcome back! Please enter your details" />
        <div class="wrapper-inputs">
            <input-base name="email" label="Email" type="email" placeholder="Enter your email" v-model="form.email" :error="authStore.errorMessage?.errors?.email?.[0]"/>
            <input-base name="password" label="Password" type="password" placeholder="Enter your password" v-model="form.password" :error="authStore.errorMessage?.errors?.password?.[0]"/>
            <button-submit value="Login" :loading="authStore.loading"/>
        </div>
        <div class="pt-5 flex justify-end text-sm space-x-1">
            <span class="text-gray-700">Don't have an account?</span>
            <router-link :to="{ name: 'register' }" class="text-blue-500 hover:underline">Register</router-link>
        </div>
    </form>
</template>

<script setup lang="ts">
import ButtonSubmit from '@/components/form/ButtonSubmit.vue';
import InputBase from '@/components/form/InputBase.vue';
import TitleForm from '@/components/form/TitleForm.vue';

import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/useAuthStore'; 
 
const authStore = useAuthStore();

const form = ref<{
    email: string,
    password: string
}>({
    email: '',
    password: ''
})

onMounted(() => {
    authStore.errorMessage = null;
})

const loginSubmit = async(): Promise<void> => {
    await authStore.login(form.value);  
}
</script> 