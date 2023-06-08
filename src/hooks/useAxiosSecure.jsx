import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);

    const AxiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        AxiosSecure.interceptors.request.use(function (config) {
            // Do something before request is sent
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Add a response interceptor
        AxiosSecure.interceptors.response.use((response) => response, async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        });
        return [AxiosSecure];
    }, [logOut])
}

export default useAxiosSecure;