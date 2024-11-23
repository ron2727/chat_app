<template>
    <div class="card bg-white rounded-md border-b-4 border-b-sky-600 space-y-3">
        <h6 class=" px-5 pt-5 text-lg font-bold text-gray-800">Title</h6>
        <p class=" px-5 text-sm text-gray-700">{{ substr('asdasd') }}</p>
        <div class="p-3 flex justify-between items-center border-t border-t-sky-600">
            <user-profile user-name="John75658" size="xs" />
            <div class=" flex items-center space-x-1">
                <users-icon class="size-5 text-gray-700" />
                <span class=" text-xs font-semibold">23</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserProfile from '../commons/UserProfile.vue';
import UsersIcon from './UsersIcon.vue';

const substr = (text: string): string => `${text.substring(0, 150)}...`;
</script>

<style scoped></style>