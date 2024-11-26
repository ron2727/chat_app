declare global {
    interface Window { 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Pusher: any; 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Echo: any;
    }
}

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});