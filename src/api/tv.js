import axios from '@/api/axios'
export const getPopularTV = async () => {
    const {data} = await axios.get('/tv/popular');
    return data?.results;
}

export const getTvOnTheAir = async () => {
    const {data} = await axios.get('/tv/on_the_air');
    return data?.results;
}

export const getTvTrailer = async (id) => {
    const {data} = await axios.get(`/tv/${id}/videos`);
    return data.results;
}