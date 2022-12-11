import axios from "@/api/axios";

export const getTrendings = async ( timeWindow ) => {
    const {data} = await axios.get(`/trending/all/${timeWindow}`);
    return data.results;
}