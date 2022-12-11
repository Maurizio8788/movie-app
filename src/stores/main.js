import { defineStore } from 'pinia'
import {getPopularElements} from "@/api/main";
export const useMainStore = defineStore('main',  {
  state() {
    return {
      popular:[]
    }
  },
  actions:{
    async getPopularElements( type ) {
      this.popular = await getPopularElements(type);
    }
  }
})
