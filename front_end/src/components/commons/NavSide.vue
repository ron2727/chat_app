<template>
    <nav>
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
                    <nav-link :to="{ name: 'home' }">
                        <plus-icon class="size-8" />
                        <span class=" font-semibold text-gray-700 group-hover:text-gray-800 group-hover:font-bold">Create Room</span>
                    </nav-link>
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

import { useAuthStore } from '@/stores/userAuth';

const authStore = useAuthStore();

</script>

<style scoped></style>