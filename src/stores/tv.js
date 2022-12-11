import {defineStore} from "pinia";
import {getPopularTV, getTvOnTheAir, getTvTrailer} from "@/api/tv";
import {moviesStore} from "@/stores/movie";

export const tvStore = defineStore('tv', {
    state(){
        return {
            tvShows:[],
            tvShowsOnTheAir:[],
            tvSeriesTrailer:{}
        }
    },
    actions:{
        async getPopularTvShow() {
             this.tvShows = await getPopularTV();
        },
        async getTvOnTheAir() {
            this.tvShowsOnTheAir = await getTvOnTheAir();
            const movieStore = moviesStore();
            movieStore.initialCover = `${import.meta.env.VITE_API_IMAGE_PATH}/w500${this.tvShowsOnTheAir[0].backdrop_path}`;
        },
        async getTvTrailer(id) {
            const videos = await getTvTrailer(id);
            this.tvSeriesTrailer = videos.find( video => video.type === 'Trailer' );
        }
    }
})