import axios from "@/api/axios";

export const getPopularElements= async( type ) => {
    const {data} = await axios.get(`/${type}/popular`)
    return data.results;
}