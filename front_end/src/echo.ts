declare global {
    interface Window { 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Pusher: any; 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Echo: any;
    }
}
import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    encrypted: true,
    forceTLS: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authorizer: (channel: any) => {
      return {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          authorize: (socketId: any, callback: (arg0: boolean, arg1: any) => void) => {
              axios.post('/api/broadcasting/auth', {
                  socket_id: socketId,
                  channel_name: channel.name
              })
              .then(response => {
                  callback(false, response.data);
              })
              .catch(error => {
                  callback(true, error);
              });
          }
      };
  },
});