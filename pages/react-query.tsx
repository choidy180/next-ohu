import axios from 'axios';
import { useQuery } from 'react-query';

const ReactQuery = () => {
    const getUserWithAxios = async () => {
        const { data } = await axios.get('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
        return data;
    }
    const query = useQuery('users', getUserWithAxios);
    return (
        !query.isLoading && (
            query.data.dataseries.map((i: any, index: any) => (
                <li key={index}>{i.cloudcover}</li>
            ))
        )
    )
}

export default ReactQuery;