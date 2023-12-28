import { api } from '@/boot/axios';

const ywGptApi = {
  smartSearch(content) {
    return api.post('/dbSearch/ywGpt/smartSearch', { content });
  }
};

export { ywGptApi };
