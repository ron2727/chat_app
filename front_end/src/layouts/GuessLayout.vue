<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="form-wrapper max-w-md w-full bg-white px-7 py-9 rounded-lg">
            <router-view/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/userAuth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

await authStore.fetchUser();

if (authStore.isAuthenticated) {
   router.push({ name: 'home' });
}
</script> 