import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchHolidays = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`https://date.nager.at/api/v2/publicholidays/2023/${id}`);
};

export const useHolidysQuery = (nation) => {
    const queryclient = useQueryClient();
    return useQuery(['holidays', nation], fetchHolidays, {
        initialData: () => {
            const holidays = queryclient.getQueryData('holidays')?.data?.[0] || null;
            return holidays ? { data: holidays } : undefined;
        }
    })
}

const fetchPost = (user) => {
    return axios.post('https://storicha.in/api/User/SiteSnsLogin', user);
}

export const useLoginHooks = () => {
    useMutation(fetchPost);
}