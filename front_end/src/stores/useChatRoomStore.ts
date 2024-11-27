import { defineStore } from "pinia";
import type { ChatRoom } from "@/interfaces/ChatRoom";
import { ref } from "vue";


export const useChatRoomStore = defineStore('chatRoom', () => {
    
    const chatRooms = ref<ChatRoom[]>([]); 

    const addChatRoom = (chatRoom: ChatRoom): boolean => {  
        const isRoomExist : boolean = chatRooms.value.some(room => room.id === chatRoom.id);
        if (!isRoomExist) {
            chatRooms.value.push(chatRoom); 
            return true;
        }
        return false;
    }

    return {
        chatRooms, 
        addChatRoom
    }
})