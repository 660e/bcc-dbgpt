<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { uid } from 'quasar';

defineOptions({ name: 'app-home' });

const $route = useRoute();

const text = ref();
const send = () => {
  console.log(text.value);
};

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

watch(
  () => $route.params.id,
  id => {
    console.log(id);
  }
);
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 flex justify-center overflow-y-auto">
      <div class="w-[800px] space-y-8 py-8 text-base">
        <div v-for="message in messages" :key="message.id" class="space-y-8">
          <div class="flex space-x-2">
            <div>
              <q-avatar color="primary" text-color="white" size="sm">Y</q-avatar>
            </div>
            <div class="flex-1">
              <div>Min Y.</div>
              <div>{{ message.user.content }}</div>
            </div>
          </div>
          <div class="flex space-x-2">
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
    </div>
    <div class="p-4 flex justify-center">
      <div @keyup.enter="send" class="border border-gray-600 rounded-xl w-[800px] flex items-end px-3">
        <q-input v-model="text" class="flex-1 py-2" placeholder="信息..." autogrow borderless dense />
        <div class="pb-3 pl-3">
          <q-btn :disable="!text" @click="send" padding="xs" color="white" text-color="dark" icon="arrow_upward" class="rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>
