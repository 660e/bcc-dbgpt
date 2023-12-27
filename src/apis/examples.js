import { api } from '@/boot/axios';

const examplesApi = {
  randomuser({ results, page, seed } = {}) {
    return api.get('https://randomuser.me/api/', { params: { results, page, seed } });
  }
};

export { examplesApi };
