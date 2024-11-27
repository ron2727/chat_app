import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios, { AxiosError } from 'axios'; 
import type { User } from '../interfaces/User';
import type { LoginCredentials } from '../interfaces/LoginCredentials';
import type { RegisterCredentials } from '../interfaces/RegisterCredentials'; 

export const useAuthStore = defineStore('auth', () => {
  // State
  const router = useRouter();
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const loading = ref(false);
  const errorMessage = ref<string | object | null>(null); 

  // Actions
  const getToken = async() => {
    await axios.get('/sanctum/csrf-cookie')
  }

  const login = async (credentials: LoginCredentials) => {
    loading.value = true;
    errorMessage.value = null;
    try {
      const response = await axios.post('/login', credentials);
      user.value = response.data.user;
      isAuthenticated.value = true; 
      router.push({ name: 'home' });
    } catch (error: unknown) {
      errorMessage.value = (error as AxiosError).response?.data || 'Login failed.';
      isAuthenticated.value = false;
    } finally {
      loading.value = false;
    }
  };
  
  const register = async (credentials: RegisterCredentials) => {
    await getToken();
    loading.value = true;
    errorMessage.value = null;
    try {
      const response = await axios.post('/register', credentials);
      user.value = response.data.user;
      isAuthenticated.value = true;
      router.push({ name: 'home' });
    } catch (error: unknown) { 
      errorMessage.value = (error as AxiosError).response?.data || 'Registration failed.';
      isAuthenticated.value = false;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    loading.value = true;
    try {
      await axios.post('/logout');
      user.value = null;
      isAuthenticated.value = false;
    } catch (error: unknown) {
      errorMessage.value = (error as AxiosError).response?.data || 'Logout failed.';
    } finally {
      loading.value = false;
    }
  };

  const fetchUser = async () => {
    loading.value = true;
    try {
      const response = await axios.get('/api/user');
      user.value = response.data.data;
      isAuthenticated.value = true;
    } catch {
      user.value = null;
      isAuthenticated.value = false;
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    errorMessage,
    login,
    register,
    logout,
    fetchUser,
  };

});
