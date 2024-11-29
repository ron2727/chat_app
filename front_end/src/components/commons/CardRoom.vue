<template>
    <div class="card relative z-0 flex flex-col justify-between bg-white rounded-md border-b-4 border-b-sky-600 space-y-3">
        <div class="wrapper space-y-3">
            <h6 class=" px-5 pt-5 text-lg font-bold text-gray-800">{{ room.title }}</h6>
            <p class=" px-5 text-sm text-gray-700 break-words">{{ substr(room.description, 150) }}</p>
        </div>
        <div class="p-3 flex justify-between items-center border-t border-t-sky-600">
            <user-profile :user-name="room.user_name" size="xs" />
            <router-link :to="{ name: 'room', params: { id: room.id, title: room.title } }" class="px-2 py-1 bg-sky-600 text-xs text-gray-200 rounded-md hover:bg-sky-700">Join</router-link> 
        </div>
     </div>
</template>

<script setup lang="ts">
import UserProfile from '../commons/UserProfile.vue'; 
import type { ChatRoom } from '@/interfaces/ChatRoom';
defineProps<{
    room: ChatRoom
}>();

const substr = (text: string, limit: number): string => {
    if (text.length >= limit) {
        return `${text.substring(0, limit)}...`;
    }

    return text;
};
</script> 