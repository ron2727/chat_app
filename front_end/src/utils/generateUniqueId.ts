export function generateUniqueId(prefix = ''): string { 
    
  const uniqueId = Math.random().toString(36).substr(2, 9); 

  return prefix + uniqueId;
}
 
