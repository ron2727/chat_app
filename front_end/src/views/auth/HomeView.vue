<template>
    <div class="wrapper w-full h-full">
        <div class="p-5 grid grid-cols-3 gap-4">
            <card-room v-for="room in chatRoomStore.chatRooms" :key="room.id" :room="room" />
        </div>
        <no-data-message v-if="chatRoomStore.chatRooms.length === 0">No rooms yet. Create one!</no-data-message>
    </div>
</template>

<script setup lang="ts">
import CardRoom from '@/components/icons/CardRoom.vue';
import { useChatRoomStore } from '@/stores/useChatRoomStore';
import type { ChatRoom } from '@/interfaces/ChatRoom';
import NoDataMessage from '@/components/commons/NoDataMessage.vue';

const chatRoomStore = useChatRoomStore();

window.Echo.channel(`chat-room`)
           .listen('.room.created', (e: ChatRoom) => {
                const isThereNewRooom : boolean = chatRoomStore.addChatRoom(e);
                if (isThereNewRooom) {
                    console.log(chatRoomStore.chatRooms);
                } 
           });
</script>
 
