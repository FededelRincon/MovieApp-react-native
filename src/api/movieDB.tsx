import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '104402535a2e04b13214efe5e26c1953',
//////// usar un env.process o algo asi para ocultar esta api_key

        language: 'es-ES'
    }
});

export default movieDB;