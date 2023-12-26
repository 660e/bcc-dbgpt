<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import DialogueComponent from './components/dialogue.vue';

defineOptions({ name: 'app-home' });

const $route = useRoute();

const text = ref();
const send = () => {
  console.log(text.value);
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
      <div @keyup.enter="send" class="border border-gray-600 rounded-xl w-[800px] flex items-end px-3">
        <q-input v-model="text" class="flex-1 py-2" placeholder="信息..." autogrow borderless dense />
        <div class="pb-3 pl-3">
          <q-btn :disable="!text" @click="send" padding="xs" color="white" text-color="dark" icon="arrow_upward" class="rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>
