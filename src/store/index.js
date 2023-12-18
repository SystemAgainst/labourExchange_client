import { defineStore } from 'pinia'

export const store = defineStore({
  state: () => ({
    role: 'admin'
  }),
  actions: {
    checkRole(role) {
      this.role = role;
    }
  },
});
