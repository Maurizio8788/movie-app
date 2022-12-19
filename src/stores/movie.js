import {defineStore} from "pinia";
import {getMovieDetail, getMovieOnTheatres, getMovieVideos, getPopularMovie} from "@/api/movie";
import {slicedArray} from "@/composable/array";

export const moviesStore = defineStore("movie", {
    state(){
        return {
            popularMovie:[],
            moviesOnTheatres:[],
            initialCover:"",
            movieTrailer:{},
            movie:{},
            crew:[],
            cast:[],
            crewDetailPage:[],
            castDetailPage:[]
        }
    },
    getters:{
      getCrew:(state) => state.crew,
      getCast:(state) => state.cast,
      getCrewDetail:(state) => state.crewDetailPage,
      getCastDetail:(state) => state.castDetailPage,
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
        },
        async getMovieDetail(idMovie) {
            this.movie = await getMovieDetail(idMovie);
            this.cast = this.movie?.credits?.cast;
            this.crewDetailPage = slicedArray(this.movie?.credits?.crew, 6);
            this.castDetailPage = slicedArray(this.cast, 10);
        }
    }
})