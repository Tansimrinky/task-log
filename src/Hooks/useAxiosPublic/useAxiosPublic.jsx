import axios from "axios"

export const axiosPublic = axios.create({
    baseURL: 'https://task-log-server-site.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;