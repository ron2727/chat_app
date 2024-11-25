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
 
</script>

<style scoped></style>