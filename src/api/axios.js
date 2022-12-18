import axios from 'axios'
export default axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    headers:{
        Accept:'application/json'
    },
    params:{
        api_key: import.meta.env.VITE_API_KEY
    }
});