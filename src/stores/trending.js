import {defineStore} from "pinia";
import {getTrendings} from "@/api/trendings";

export const trendingsStore = defineStore('trendings', {
    state() {
        return {
            trendings:[]
        }
    },
    actions:{
        async getTrendings( timeWindow ) {
            this.trendings=await getTrendings(timeWindow);
        }
    }
})