// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      user : null,
      credential: null,
      
    }
  },
  getters:{
    userFull: (state) => state.user + " Escobar"
  },
  actions:{
    userFirst(name = this.user) {
      this.user = name
    }
  }
})
