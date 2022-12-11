import axios from '@/api/axios'
export const getPopularMovie = async () => {
    const {data} = await axios.get('/movie/popular')
    return data.results;
}

export const getMovieOnTheatres = async () => {
    const { data } = await axios.get(`movie/now_playing`);
    return data.results;
}

export const getMovieVideos= async (idMovie) => {
    const {data} = await axios.get(`movie/${idMovie}/videos`);
    return data.results;
}