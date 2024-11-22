<template>
    <div class="title space-y-2">
        <h3 class=" font-bold text-gray-800 text-3xl">{{ title }}</h3>
        <h6 class=" text-gray-700" v-if="subtitle">{{ subtitle }}</h6>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    subtitle?: string
}>();     
</script>

<style scoped></style>