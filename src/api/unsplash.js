import axios from 'axios';

export default  axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID O9tn2tf13dS_46ISaPLH3CDIi2XGzuVNVUJk4o3hNXE'
    }
});