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
import { useAuthStore } from '@/stores/userAuth';
import { useRouter } from 'vue-router'; 

const authStore = useAuthStore();
const router = useRouter();

await authStore.fetchUser(); 

if (!authStore.isAuthenticated) {
   router.push({ name: 'login' });
}

window.Echo.channel(`chat`)
    .listen('.send-message', (e: string) => {
        console.log(e);
});

</script>

<style scoped></style>