<template>
    <div class="wrapper-input mb-4">
      <label :for="name" class="block text-md font-medium text-gray-700 mb-1">
            {{ label }}
      </label>
      <textarea ref="textarea" 
              @input="autoResize" 
              v-model="model"
              :id="name"
              :name="name" 
              :type="type" 
              :placeholder="placeholder" 
              :class="[
                'w-full py-1 px-2 bg-gray-50 border border-gray-300 rounded-md resize-none',
                error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
               ]">
       </textarea>
       <p v-if="error" class="mt-1 text-sm text-red-500">
            {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'; 
defineProps({
    name: String,
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String, 
    error: String
});

const model = defineModel<string>();
const textarea = useTemplateRef<HTMLTextAreaElement | null>('textarea');


const autoResize = () => {    
    if (textarea.value!.scrollHeight <= 272) {  
        textarea.value!.style.height = (textarea.value!.scrollHeight + 2) + 'px'; 
    }
    if (model.value == '') {
        textarea.value!.style.height = '58px';  
    } 
}; 
</script>
 