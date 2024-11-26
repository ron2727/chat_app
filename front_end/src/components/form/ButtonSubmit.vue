<template>
    <button type="submit"
            :disabled="loading" 
            :class="{'cursor-not-allowed opacity-90':loading}"
            class="btn flex items-center justify-center w-full font-medium bg-gray-900 text-white rounded-md py-1.5 space-x-3"
    >
        <spinner-icon class="animate-spin size-6" v-if="loading"/>
        <span v-if="!loading">{{ value }}</span>
    </button>
</template>

<script setup lang="ts">
import SpinnerIcon from '../icons/SpinnerIcon.vue';

defineProps({
    value: {
        type: String,
        required: true
    },  
    loading:{
        type: Boolean,
        default: false
    }
})
</script>
 