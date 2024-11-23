<template>
    <div class="profile flex items-center mt-14">
        <div :class="size === 'sm' ? 'size-8' : size === 'md' ? 'size-9' : 'size-10'" 
              class=" size-9 flex justify-center items-center text-xl text-gray-200 bg-sky-600 rounded-full">
            {{ props.userName[0].toUpperCase() }}
        </div>
        <span class=" ml-2 font-semibold text-gray-700">{{userName}}</span>
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