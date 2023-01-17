import axios from "axios"

export const fetchData = async () => {
    const { data } = await axios.get('https://www.boredapi.com/api/activity');
    return data;
}

export const handler = (req, res) => {
    const { pid } = req.query;
    console.log(req);
    return req;
    
}