<template>
    <button class="btn flex items-center w-full group" @click="logoutHandler">
        <PowerIcon class="size-8" />
        <span class="ml-2 font-semibold text-gray-700 group-hover:text-gray-800 group-hover:font-bold">Logout</span>
    </button>
</template>

<script setup lang="ts">
import PowerIcon from '../icons/PowerIcon.vue';
import { useAuthStore } from '@/stores/userAuth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();  

const logoutHandler = async(): Promise<void> => {
    await authStore.logout();
    if (!authStore.isAuthenticated) {
        router.push({ name: 'login' });
    }
}
</script> 