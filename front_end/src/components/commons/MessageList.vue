<template>
    <div :class="{'justify-end': false}"
          class="message-list flex">
        <div class=" relative flex max-w-md w-full">
            <div v-if="2 !== message.user.id" class=" h-full flex items-end">
                <div  class=" translate-y-1/2 size-8 text-xs flex justify-center items-center text-gray-200 bg-sky-600 rounded-full">
                  JR
               </div>
            </div>
             <div class="wrapper-name flex-1 px-2">
                <div class="header flex items-center space-x-2 pt-1">
                    <span v-if="2 !== message.user.id" class=" font-semibold text-xs flex items-center">
                        {{ message.user.name }}  
                    </span>
                    <span v-else class=" text-xs">You</span> 
                </div>
                <div :class="[false ? 'bg-gray-900 text-gray-200' :' bg-white text-gray-800']"
                     class="message mt-1 p-4  text-sm rounded-lg rounded-bl-none font-normal">
                    {{ message.message }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"> 

  
defineProps({
    message: {
        type: Object,
        required: true,
        default: () => ({
            user: {
                name: 'John Doe',
                id: 1
            },
            message: 'Hello world', 
        })
    },
}) 
</script>
 