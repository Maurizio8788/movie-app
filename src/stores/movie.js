import {defineStore} from "pinia";
import {getMovieOnTheatres, getMovieVideos, getPopularMovie} from "@/api/movie";

export const moviesStore = defineStore("movie", {
    state(){
        return {
            popularMovie:[],
            moviesOnTheatres:[],
            initialCover:"",
            movieTrailer:{}
        }
    },
    actions:{
        async getPopularMovie() {
            this.popularMovie= await getPopularMovie();
        },
        async getMovieOnTheatres() {
            this.moviesOnTheatres = await getMovieOnTheatres();
            this.initialCover = `${import.meta.env.VITE_API_IMAGE_PATH}/w500${this.moviesOnTheatres[0].backdrop_path}`;
        },
        async getMovieTrailer(idMovie) {
            const results = await getMovieVideos(idMovie);
            this.movieTrailer = results.find( x => x.type === 'Trailer' );
        }
    }
})