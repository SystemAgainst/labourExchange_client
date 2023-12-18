import { defineStore } from 'pinia';
import { checkAuthentication } from '@/api/services/account.js'


export const useAuthStore = defineStore('auth', {
  state() {
    return {
      user: null,
      error: null,
    }
  },
  getters: {
    isAuthenticated: (state) => {
      return state.user !== undefined;
    },
  },
  actions: {
    async checkAuthenticationRequest({ login, password }) {
      try {
        const response = await checkAuthentication(login, password);
        this.user = response.data;
        this.error = null;
      } catch (error) {
        this.user = null;
        this.error = 'Authentication failed. Check your credentials.';
        throw error;
      }
    },
    logoutUser() {
      this.user = null;
      this.error = null;
    },
  },
});
