<template>
  <Teleport to="body" v-if="isOpen">
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      @click="closeModal">
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full" @click.stop>
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">{{ modalTitle }}</h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
            <xmark-icon class="size-6" />
          </button>
        </div>
        <div class="mt-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import XmarkIcon from '../icons/XmarkIcon.vue';

const emit = defineEmits(['closeModal']);

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

const closeModal = () => {
  emit('closeModal');
};
</script>