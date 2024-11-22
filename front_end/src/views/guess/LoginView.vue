<template>
    <form action="" class="space-y-4">
        <title-form title="Login in to your account" subtitle="Welcome back! Please enter your details" />
        <div class="wrapper-inputs">
            <input-base name="email" label="Email" type="email" placeholder="Enter your email" v-model="form.email"/>
            <input-base name="password" label="Password" type="password" placeholder="Enter your password" v-model="form.password"/>
            <button-submit value="Login" />
        </div>
        <div class="pt-5 flex justify-end text-sm space-x-1">
            <span class="text-gray-700">Don't have an account?</span>
            <router-link :to="{ name: 'register' }" class="text-blue-500 hover:underline">Register</router-link>
        </div>
    </form>
</template>

<script setup lang="ts">
import ButtonSubmit from '@/components/forms/ButtonSubmit.vue';
import InputBase from '@/components/forms/InputBase.vue';
import TitleForm from '@/components/forms/TitleForm.vue';

import { ref } from 'vue';

const form = ref<{
    email: string,
    password: string
}>({
    email: '',
    password: ''
})

</script>

<style scoped>

</style>