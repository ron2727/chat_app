<template>
    <nav>
        <ModalComponent modal-title="Create Room" :is-open="modalCreateRoomOpen" @closeModal="modalCreateRoomOpen = false">
            <form submit.event>
               <input-base name="title" label="Title" placeholder="Enter your title" v-model="form.title" :error="authStore.errorMessage?.errors?.title?.[0]"/>
               <textarea-base name="description" label="Description" placeholder="Enter your description" v-model="form.description" :error="authStore.errorMessage?.errors?.description?.[0]"/>
               <button-submit value="Create Chat Room"/>
            </form>
        </ModalComponent>
        <div class=" relative w-60 p-5 bg-white h-full border-r border-gray-300">
            <h6 class="logo mb-10 font-bold text-gray-800 text-2xl">Chat App</h6>
            <ul class=" space-y-4 mb-14">
                <li>
                    <nav-link :to="{ name: 'home' }">
                        <home-icon class="size-8" />
                        <span class=" font-semibold text-gray-700 group-hover:text-gray-800 group-hover:font-bold">Home</span>
                    </nav-link>
                </li>
                <li> 
                    <button type="button" class=" flex items-center space-x-2" @click="modalCreateRoomOpen = true">
                        <plus-icon class="size-8" />
                        <span class=" font-semibold text-gray-700 group-hover:text-gray-800 group-hover:font-bold">Create Room</span>
                    </button>
                </li>
            </ul>
            <user-profile :user-name="authStore.user.user_name" size="sm"/>
            <button-logout class=" absolute left-0 bottom-0 m-5"/>
        </div>
    </nav>
</template>

<script setup lang="ts">
import HomeIcon from '../icons/HomeIcon.vue';
import PlusIcon from '../icons/PlusIcon.vue';
import NavLink from '../commons/NavLink.vue';
import UserProfile from './UserProfile.vue';
import ButtonLogout from './ButtonLogout.vue'; 
import ModalComponent from './ModalComponent.vue';
import InputBase from '../form/InputBase.vue'; 
import TextareaBase from '../form/TextareaBase.vue'; 
import ButtonSubmit from '../form/ButtonSubmit.vue';


import { useAuthStore } from '@/stores/userAuth';
import { ref } from 'vue';

const authStore = useAuthStore();
const modalCreateRoomOpen = ref(false);
const form = ref<{
    title: string,
    description: string
}>({
    title: '',
    description: ''
})
</script>

<style scoped></style>