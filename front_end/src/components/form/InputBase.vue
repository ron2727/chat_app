<template>
    <div class="wrapper-input mb-4">
        <label :for="name" class="block text-md font-medium text-gray-700 mb-1">
            {{ label }}
        </label>
        <input :id="name"
               :name="name" 
               :type="type" 
               :placeholder="placeholder"
               v-model="model"
               :class="[
                'w-full py-1 px-2 bg-gray-50 border border-gray-300 rounded-md',
                error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
               ]"/>
        <p v-if="error" class="mt-1 text-sm text-red-500">
            {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String, 
    error: String
})

const model = defineModel({ required: true })
</script>