import axios from 'axios';

const TOKEN = "ceui1r2ad3i6ffmfki2gceui1r2ad3i6ffmfki30"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})