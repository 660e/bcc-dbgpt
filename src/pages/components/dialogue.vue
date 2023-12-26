<script setup>
import { ref } from 'vue';
import { uid } from 'quasar';

defineOptions({ name: 'dialogue-component' });

const messages = ref([
  {
    id: uid(),
    user: {
      type: 'text',
      content: '2023年度通过审核的小微企业数'
    },
    assistant: {
      type: 'text',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci at eos beatae ipsa a, soluta cum! Eligendi, eveniet facere quae nam impedit repellendus eum aliquam, nobis eaque sequi exercitationem ipsa.'
    }
  },
  {
    id: uid(),
    user: {
      type: 'text',
      content: '2023年度丰台区安全风险审核率'
    },
    assistant: {
      type: 'text',
      content:
        'Laudantium ut, eius corporis nobis, repellendus ipsa minima pariatur assumenda repellat harum voluptatem enim nesciunt reprehenderit suscipit error dolorem autem veniam explicabo laborum libero ratione aperiam voluptas architecto. Quos, minima!'
    }
  }
]);
</script>

<template>
  <div class="w-[800px] space-y-8 py-8 text-base">
    <div v-for="message in messages" :key="message.id" class="space-y-8">
      <div class="flex space-x-4 pr-10">
        <div>
          <q-avatar color="primary" text-color="white" size="sm">Y</q-avatar>
        </div>
        <div class="flex-1">
          <div>Min Y.</div>
          <div>{{ message.user.content }}</div>
        </div>
      </div>
      <div class="flex space-x-4 pr-10">
        <div>
          <q-avatar size="sm">
            <img src="icons/favicon-128x128.png" />
          </q-avatar>
        </div>
        <div class="flex-1">
          <div>DB-GPT</div>
          <div>{{ message.assistant.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
