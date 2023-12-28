import { boot } from 'quasar/wrappers';
import { uid } from 'quasar';
import axios from 'axios';

let controller = new AbortController();

const api = axios.create({
  headers: {
    Authorization: uid()
  },
  timeout: 10000
});

api.interceptors.request.use(
  config => {
    controller = new AbortController();
    config.signal = controller.signal;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api, controller };
