<template>
    <div class="card relative z-0 bg-white rounded-md border-b-4 border-b-sky-600 space-y-3">
        <h6 class=" px-5 pt-5 text-lg font-bold text-gray-800">{{ room.title }}</h6>
        <p class=" px-5 text-sm text-gray-700">{{ substr(room.description) }}</p>
        <div class="p-3 flex justify-between items-center border-t border-t-sky-600">
            <user-profile :user-name="room.user_name" size="xs" />
            <div class=" flex items-center space-x-1">
                <users-icon class="size-5 text-gray-700" />
                <span class=" text-xs font-semibold">23</span>
            </div>
        </div>
        <router-link :to="{ name: 'room', params: { id: room.id, title: room.title } }" class=" absolute top-0 right-0 m-3 px-2 py-1 bg-sky-600 text-xs text-gray-200 rounded-md hover:bg-sky-700">Join</router-link> 
    </div>
</template>

<script setup lang="ts">
import UserProfile from '../commons/UserProfile.vue';
import UsersIcon from './UsersIcon.vue';
import type { ChatRoom } from '@/interfaces/ChatRoom';
defineProps<{
    room: ChatRoom
}>();
const substr = (text: string): string => `${text.substring(0, 150)}...`;
</script>

<style scoped></style>