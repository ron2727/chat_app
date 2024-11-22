<template>
    <button type="submit" class="btn w-full font-medium bg-gray-900 text-white rounded-md py-1.5">{{ value }}</button>
</template>

<script setup lang="ts">
defineProps<{
    value: string
}>()
</script>
 