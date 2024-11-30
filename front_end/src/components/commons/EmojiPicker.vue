<template>
    <div ref="dropdown" class=" relative">
        <div v-if="isDropdownOpen"
             class=" absolute top-0 right-0 -translate-y-full w-56 h-56 px-3  border border-gray-200 rounded-lg bg-white overflow-x-hidden overflow-y-auto">
            <EmojiPicker :native="true" @select="onSelectEmoji" />
        </div>
        <div @click="toggleDropdown">
            <FaceSmileIcon class=" size-6 cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
import EmojiPicker, { type EmojiExt } from 'vue3-emoji-picker';
import FaceSmileIcon from '../icons/FaceSmileIcon.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';


const emits = defineEmits(['select']);

onMounted(() => { 
    document.addEventListener('click', handleClickOutside); 
});

onBeforeUnmount(() => { 
    document.removeEventListener('click', handleClickOutside);
});

// Handler for emoji selection
const onSelectEmoji = (emoji: EmojiExt) => {
    emits('select', emoji.i); 
}

const isDropdownOpen = ref<boolean>(false);
const dropdown = ref<HTMLElement | null>(null);

const toggleDropdown = () => { 
    isDropdownOpen.value = !isDropdownOpen.value; 
};

const handleClickOutside = (event: MouseEvent) => {
    if (dropdown.value && !dropdown.value.contains(event.target as Node)) { 
        isDropdownOpen.value = false; 
    }
};


</script>