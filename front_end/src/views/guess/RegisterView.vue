<template>
    <form action="" class="space-y-4">
        <title-form title="Create an account" subtitle="Start making bond with someone!" />
        <div class="wrapper-inputs">
            <input-base name="userName" label="User name" placeholder="Enter your user name" v-model="form.userName"/>
            <input-base name="email" label="Email" type="email" placeholder="Enter your email" v-model="form.email"/>
            <input-base name="password" label="Password" type="password" placeholder="Enter your password" v-model="form.password"/>
            <input-base name="confirm_password" label="Confirm Password" type="password" placeholder="Confirm your password" v-model="form.password_confirm"/>
            <button-submit value="Register" />
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

import { ref } from 'vue';

const form = ref<{
    userName: string,
    email: string,
    password: string,
    password_confirm: string
}>({
    userName: '',
    email: '',
    password: '',
    password_confirm: ''
})

</script>

<style scoped>

</style>