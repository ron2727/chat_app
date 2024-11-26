import type { Ref } from "vue";
 
export const autoResizeTextArea = (textarea: Ref<HTMLTextAreaElement | null>, val: string, limitSize: number) => {  
    if (textarea.value!.scrollHeight <= limitSize) { 
        textarea.value!.style.height = 'min';
        textarea.value!.style.height = textarea.value!.scrollHeight + 'px'; 
    }
    if (val == '') {
        textarea.value!.style.height = '40px';  
    }
     
};