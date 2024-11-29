<template>
    <div :class="{'justify-end': userAuth.user.id == message.user.id}"
          class="message-list flex">
        <div class=" relative flex max-w-md w-full">
            <div v-if="userAuth.user.id !== message.user.id" class=" h-full flex items-end">
               <user-profile :user-name="message.user.user_name" :show-user-name="false" size="xs"
                              class=" relative left-0 bottom-0 translate-y-1/2"
               />
            </div>
             <div class="wrapper-name w-full flex-1 px-2">
                <div class="header flex items-center space-x-2 pt-1">
                    <span v-if="userAuth.user.id !== message.user.id" class=" font-semibold text-xs flex items-center">
                         {{ message.user.user_name }}
                    </span>
                    <span v-else class=" text-gray-700 text-xs font-semibold">You</span> 
                </div>
                <div :class="[userAuth.user.id == message.user.id ? 'bg-gray-900 text-gray-200 rounded-br-none' :' bg-white text-gray-800 rounded-bl-none']"
                      class="message w-full mt-1 px-4 py-2 break-words text-sm rounded-lg font-normal">
                         {{ message.message }} 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"> 
import type { ChatMessage } from '@/interfaces/ChatMessage';
import UserProfile from './UserProfile.vue';
import { useAuthStore } from '@/stores/useAuthStore';

defineProps<{
    message: ChatMessage
}>();

const userAuth = useAuthStore();

</script>
 