<template>
    <form @submit.prevent="registerSubmit" class="space-y-4">
        <title-form title="Create an account" subtitle="Start making bond with someone!" />
        <div class="wrapper-inputs">
            <input-base name="user_name" label="User name" placeholder="Enter your user name"  v-model="form.user_name" :error="authStore.errorMessage?.errors?.user_name?.[0]"/>
            <input-base name="email" label="Email" type="email" placeholder="Enter your email" v-model="form.email" :error="authStore.errorMessage?.errors?.email?.[0]"/>
            <input-base name="password" label="Password" type="password" placeholder="Enter your password" v-model="form.password" :error="authStore.errorMessage?.errors?.password?.[0]"/>
            <input-base name="password_confirmation" label="Confirm Password" type="password" placeholder="Confirm your password" v-model="form.password_confirmation"/>
            <button-submit value="Register" :loading="authStore.loading"/>
        </div>
        <div class="pt-5 flex justify-end text-sm space-x-1">
            <span class="text-gray-700">Already have an account?</span>
            <router-link :to="{ name: 'login' }" class="text-blue-500 hover:underline">Login</router-link>
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
    user_name: string,
    email: string,
    password: string,
    password_confirmation: string
}>({
    user_name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

onMounted(() => {
    authStore.errorMessage = null;
})

const registerSubmit = async(): Promise<void> => {
    await authStore.register(form.value); 
    console.log(authStore.errorMessage); 
}

</script>

<style scoped>

</style>