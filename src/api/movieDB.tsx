import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b1abd01c7c6d143e6bb723c67b921ea0',
        language: 'es-ES'
    }
})

export default movieDB;