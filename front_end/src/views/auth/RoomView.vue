<template>
    <div class=" h-full flex flex-col">
       <div class="room-title p-5 bg-white border-b border-gray-300">
          <h6 class=" text-gray-800 text-3xl font-bold">Le Serafim Familya Lapok</h6>
       </div>
       <div class="wrapper flex-grow flex">
         <div class=" flex-grow flex flex-col">
            <div class="message-list p-5 flex-grow overflow-y-auto">
               <message-list/>
            </div>
            <div class="w-full bg-white border-t border-t-gray-300">
               <form @submit.prevent="" class="flex items-center p-5 space-x-2"> 
                    <textarea ref="textarea" 
                              @input="autoResize()" 
                              v-model="form.message"
                              name="message" id="message"
                              class="flex-1 px-4 py-2 h-10 text-sm font-normal bg-gray-200 outline-none resize-none rounded-3xl"
                              placeholder="Message..."></textarea>
                    <button type="submit" class=" size-max p-3 rounded-full hover:bg-gray-100">
                         <paper-airplane class=" size-6 text-blue-600" />
                    </button>
                </form>
            </div>
         </div>
         <div class=" p-5 w-60 bg-white border-l border-l-gray-300">
             <h6 class=" text-lg font-bold text-gray-700">3 People in room</h6>
             <div class="users-list mt-3 space-y-3">
                <UserProfile user-name="John75658" size="xs" v-for="index in 3" :key="index"/>
             </div>
         </div>
       </div>
    </div>
</template>

<script setup lang="ts">
import MessageList from '@/components/commons/MessageList.vue';
import UserProfile from '@/components/commons/UserProfile.vue';
import PaperAirplane from '@/components/icons/PaperAirplane.vue';
import { ref, useTemplateRef } from 'vue';

const textarea = useTemplateRef<HTMLTextAreaElement | null>('textarea');
const form = ref<{
   message: string
}>({
    message: ''
})
const autoResize = () => {  
    if (textarea.value!.scrollHeight <= 136) { 
        textarea.value!.style.height = 'min';
        textarea.value!.style.height = textarea.value!.scrollHeight + 'px'; 
    }
    if (form.value!.message == '') {
       textarea.value!.style.height = '40px';  
    }
     
};
</script> 