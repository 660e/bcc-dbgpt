import { boot } from 'quasar/wrappers';
import { uid } from 'quasar';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({
  headers: {
    Authorization: uid()
  },
  timeout: 10000
});

let controller = new AbortController();

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
    return response;
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
