import axios from 'axios';

const REQUEST_TIME = 25000;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: REQUEST_TIME,
});

// TODO 추후 로컬 스토리지 혹은 쿠키와 연동해서 header에 넣는 로직 필요
const getAuthHeader = () => `bearer accesstoken`;

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = getAuthHeader();
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
