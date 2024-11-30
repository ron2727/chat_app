<template>
    <div class=" h-full flex flex-col">
       <div class="room-title p-5 bg-white border-b border-gray-300">
          <h6 class=" text-gray-800 text-3xl font-bold">{{ $route.params.title }}</h6>
       </div>
       <div class="wrapper flex-grow flex">
         <div class=" flex-grow flex flex-col">
            <div ref="messageListWrapper" class="message-list p-5 flex-grow basis-0 overflow-y-auto space-y-1 break-words">
               <message-list v-for="message in roomChatMessages" :key="message.id" :message="message"/> 
                <div v-if="isMessageSending" class="loaded-message flex justify-end text-xs px-5 pb-2">
                  <SpinnerIcon class="animate-spin size-3 text-sky-600" />
                </div>
                <div v-if="isMessageSentSuccessfully" class=" text-gray-600 text-xs text-end px-5 pb-2">
                   Sent
                </div>
            </div>
            <div class="w-full bg-white border-t border-t-gray-300">
               <form @submit.prevent="sendMessage" class="flex items-center p-5 space-x-2"> 
                    <EmojiPicker @select="form.message += $event"/>
                    <textarea ref="textarea" 
                              @input="autoResize()" 
                              v-model="form.message"
                              name="message" id="message"
                              class="flex-1 px-4 py-2 h-10 text-sm font-normal bg-gray-200 outline-none resize-none rounded-3xl"
                              placeholder="Message..."></textarea>
                    <button v-if="form.message.trim() !== ''" 
                            :disabled="isMessageSending"
                            type="submit" class=" size-max p-3 rounded-full hover:bg-gray-100">
                         <paper-airplane class=" size-6 text-blue-600" />
                    </button>
                </form>
            </div>
         </div>
         <div class=" p-5 w-60 bg-white border-l border-l-gray-300">
             <h6 class=" text-lg font-bold text-gray-700">{{ usersInThisRoom.length }} People in room</h6>
             <div class="users-list mt-3 space-y-3">
                <UserProfile v-for="user in usersInThisRoom" :key="user.id" :user-name="user.user_name" size="xs"/>
             </div>
         </div>
       </div>
    </div>
</template>

<script setup lang="ts">
import MessageList from '@/components/commons/MessageList.vue';
import UserProfile from '@/components/commons/UserProfile.vue';
import PaperAirplane from '@/components/icons/PaperAirplane.vue'; 
import EmojiPicker from '@/components/commons/EmojiPicker.vue';
import SpinnerIcon from '@/components/icons/SpinnerIcon.vue';
import { nextTick, ref, useTemplateRef } from 'vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';
import type { User } from '@/interfaces/User';
import type { ChatMessage } from '@/interfaces/ChatMessage';
import { useAuthStore } from '@/stores/useAuthStore';
import { generateUniqueId } from '@/utils/generateUniqueId';
import axios from 'axios';

const userAuth = useAuthStore();
const route = useRoute();
const textarea = useTemplateRef<HTMLTextAreaElement | null>('textarea');
const form = ref<{
    room_id: string | string[],
    message: string
}>({
    room_id: route.params.id,
    message: ''
}); 
const usersInThisRoom = ref<User[]>([]);
const roomChatMessages = ref<ChatMessage[]>([]);
const isMessageSending = ref(false);
const messageListWrapper = ref<HTMLElement | null>(null);
const isMessageSentSuccessfully = ref(false);

onBeforeRouteLeave(() => {
    window.Echo.leave(`room.${route.params.id}`);
});

const autoResize = (): void => {  
    if (textarea.value!.scrollHeight <= 136) { 
        textarea.value!.style.height = 'min';
        textarea.value!.style.height = textarea.value!.scrollHeight + 'px'; 
    }
    if (form.value!.message == '') {
       textarea.value!.style.height = '40px';  
    }
     
};

const sendMessage = async(): Promise<void> => {
     isMessageSending.value = true;
     const chatId : string = generateUniqueId();
     const userMessage : ChatMessage = {
        id: chatId,
        message: form.value.message,  
        user: userAuth.user, 
     }  
    await addNewMessage(userMessage);
    try {
      const response = await axios.post(`/api/chat/room`, form.value); 
      console.log(response.data);
      form.value!.message = '';
    } catch (error: unknown) {
      console.log(error);
    }  
}


const scrollToBottom = async(): Promise<void> => { 
    await nextTick();
    messageListWrapper!.value!.scrollTop = messageListWrapper!.value!.scrollHeight; 
}

const addNewMessage = async(message: ChatMessage): Promise<void> => {
      if (message.id) {
        roomChatMessages.value.push(message);
      }
      await scrollToBottom();
}

const alertMessageHasBeenSent = () => {
      isMessageSentSuccessfully.value = true;
      setTimeout(() => {
        isMessageSentSuccessfully.value = false;
      }, 2000)
}
//Echo
window.Echo.join(`room.${route.params.id}`)
    .here((users: User[]): void => { 
      usersInThisRoom.value = users;
      console.log(users); 
    })
    .joining((user: User): void => { 
      usersInThisRoom.value.push(user);
      console.log(`Someone join ${user}`);
    })
    .leaving((user: User): void => { 
      usersInThisRoom.value = usersInThisRoom.value.filter(u => u.id !== user.id);
      console.log(`Someone leave ${user}`);
    }) 
    .listen('.chat.message', async(message: ChatMessage): Promise<void> => {
       if (message.user.id === userAuth.user.id) {
          isMessageSending.value = false;
          alertMessageHasBeenSent();
       } 
       if (message.user.id !== userAuth.user.id) {
          await addNewMessage(message);
       } 
    }); 



</script> 