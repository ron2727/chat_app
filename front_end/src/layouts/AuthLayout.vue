<template>
    <div class="w-screen h-screen flex overflow-hidden">
        <nav-side />
        <div class="content flex-grow">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import NavSide from '@/components/commons/NavSide.vue'; 
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'vue-router'; 

const authStore = useAuthStore();
const router = useRouter();

await authStore.fetchUser(); 

if (!authStore.isAuthenticated) {
   router.push({ name: 'login' });
}



</script>

<style scoped></style>