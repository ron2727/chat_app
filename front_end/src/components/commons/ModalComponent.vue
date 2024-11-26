<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click="$emit('closeModal')">
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full" @click.stop>
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">{{ modalTitle }}</h2>
          <button @click="$emit('closeModal')" class="text-gray-500 hover:text-gray-700">
            <xmark-icon class="size-6"/>
          </button>
        </div>
        <div class="mt-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import {defineProps } from 'vue';
import XmarkIcon from '../icons/XmarkIcon.vue';
  
defineProps({
    modalTitle: {
      type: String,
      default: 'Modal Title',
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
});
 
</script>
   
  