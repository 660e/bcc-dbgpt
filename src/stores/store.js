import { defineStore } from 'pinia';
import { uid } from 'quasar';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
      // {
      //   id: uid(),
      //   user: {
      //     type: 'text',
      //     data: '2023年度通过审核的小微企业数'
      //   },
      //   assistant: {
      //     type: 'text',
      //     data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci at eos beatae ipsa a, soluta cum! Eligendi, eveniet facere quae nam impedit repellendus eum aliquam, nobis eaque sequi exercitationem ipsa.'
      //   }
      // },
      // {
      //   id: uid(),
      //   user: {
      //     type: 'text',
      //     data: '2023年度丰台区安全风险审核率'
      //   },
      //   assistant: {
      //     type: 'text',
      //     data: 'Laudantium ut, eius corporis nobis, repellendus ipsa minima pariatur assumenda repellat harum voluptatem enim nesciunt reprehenderit suscipit error dolorem autem veniam explicabo laborum libero ratione aperiam voluptas architecto. Quos, minima!'
      //   }
      // }
    ]
  }),
  getters: {},
  actions: {
    send(data) {
      this.messages.push({
        id: uid(),
        user: {
          type: 'text',
          data
        }
      });
    },
    response(data) {
      this.messages[this.messages.length - 1].assistant = data;
    }
  }
});
