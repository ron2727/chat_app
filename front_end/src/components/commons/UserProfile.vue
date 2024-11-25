<template>
    <div class="profile flex items-center">
        <div :class="size === 'xs' ? 'size-7 text-xs' : size === 'sm' ? 'size-8' : size === 'md' ? 'size-9' : 'size-10'" 
              class="flex justify-center items-center text-gray-200 bg-sky-600 rounded-full">
            {{ props.userName[0].toUpperCase() }}
        </div>
        <span :class="{ 'text-xs': size === 'xs'}" class=" ml-2 font-semibold text-gray-700">{{userName}}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    size: {
      validator(value: string) { 
         return ['sm', 'md', 'lg'].includes(value)
      }
    },
    userName: {
        type: String,
        required: true
    }
})
</script> 