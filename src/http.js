import axios from "axios";

    //http://medicine.bishwajitsarkar.com/
export const BASE_URL = 'http://127.0.0.1:8000/';

const http = axios.create({

    baseURL: BASE_URL,
    timeout: 1000,
      // `headers` are custom headers to be sent
    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'X-Develop-By': 'Bikso',
    },
});

export default http;