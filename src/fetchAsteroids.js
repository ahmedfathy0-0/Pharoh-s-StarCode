import axios from 'axios';

export const fetchAsteroids = async () => {
    const response = await axios.get('API_ENDPOINT_HERE');   // Replace with actual API 
    return response.data; 
};
