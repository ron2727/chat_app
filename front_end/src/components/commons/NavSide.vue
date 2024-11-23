<template>
    <nav>
        <div class=" w-60 p-5 bg-white h-full border-r border-gray-300">
            <h6 class="logo mb-10 font-bold text-gray-800 text-2xl">Chat App</h6>
            <ul class=" space-y-4 mb-14">
                <li>
                    <NavLink :to="{ name: 'home' }">
                        <HomeIcon class="size-8" />
                        <span class=" font-semibold text-gray-700 group-hover:text-gray-800 group-hover:font-bold">Home</span>
                    </NavLink>
                </li>
                <li> 
                    <NavLink :to="{ name: 'home' }">
                        <PlusIcon class="size-8" />
                        <span class=" font-semibold text-gray-700 group-hover:text-gray-800 group-hover:font-bold">Create Room</span>
                    </NavLink>
                </li>
            </ul>
            <UserProfile user-name="John75658"/>
        </div>
    </nav>
</template>

<script setup lang="ts">
import HomeIcon from '../icons/HomeIcon.vue';
import PlusIcon from '../icons/PlusIcon.vue';
import NavLink from '../commons/NavLink.vue';
import UserProfile from './UserProfile.vue';
 

</script>

<style scoped></style>