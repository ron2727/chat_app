<template>
    <div class="nav-link group">
        <router-link :to="to" class="flex items-center space-x-2">
            <slot></slot>
        </router-link>
    </div>
</template>


<script setup lang="ts">
defineProps<{
    to: {
        name: string
    }
}>() 
</script>