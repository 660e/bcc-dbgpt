<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useChatStore } from '@/stores/store';
import { ywGptApi } from '@/apis/db-search.js';

import DialogueComponent from './components/dialogue.vue';

defineOptions({ name: 'app-home' });

const $route = useRoute();
const $store = useChatStore();

const loading = ref(false);
const data = ref();
const send = () => {
  loading.value = true;
  $store.send(data.value);

  ywGptApi.smartSearch(data.value).then(gptResponse => {
    if (gptResponse.status === 20000) {
      if (gptResponse.content.type) {
        $store.response(gptResponse.content);
      } else {
        $store.response({ type: 'text', data: 'Lorem ipsum dolor sit amet.' });
      }
    }
  });

  data.value = '';
};

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
      <dialogue-component />
    </div>
    <div class="p-4 flex justify-center">
      <div class="border border-gray-600 rounded-xl w-[800px] flex items-center px-3">
        <q-input v-model="data" @keyup.enter="send" class="flex-1 py-2" placeholder="信息..." borderless dense />
        <q-btn :disable="!data" @click="send" padding="xs" color="white" text-color="dark" icon="arrow_upward" class="rounded-md" />
      </div>
    </div>
  </div>
</template>
