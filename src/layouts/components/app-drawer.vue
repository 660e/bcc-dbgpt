<script setup>
import { onMounted, ref } from 'vue';
import { examplesApi } from '@/apis/examples';

const chat = ref();
const chats = ref();

onMounted(() => {
  examplesApi.randomuser({ results: 5 }).then(response => {
    chats.value = response.data.results;
  });
});
</script>

<template>
  <div class="h-full flex flex-col p-2 space-y-4">
    <div class="flex justify-between items-center p-2 cursor-pointer rounded relative hover:bg-gray-800" v-ripple>
      <q-avatar size="md">
        <img src="icons/favicon-128x128.png" />
      </q-avatar>
      <div class="flex-1 pl-2">新会话</div>
      <q-icon name="edit" size="xs" />
    </div>

    <div class="flex-1 space-y-2">
      <div
        v-for="chat in chats"
        :key="chat.id.value"
        class="flex justify-between items-center px-2 leading-8 cursor-pointer rounded relative hover:bg-gray-800"
        v-ripple
      >
        <span>{{ chat.name.title }} {{ chat.name.first }} {{ chat.name.last }}</span>
        <q-icon name="more_horiz" size="xs" />
      </div>
    </div>

    <div class="flex items-center p-2 cursor-pointer rounded relative hover:bg-gray-800" v-ripple>
      <q-avatar size="md">
        <img src="icons/favicon-128x128.png" />
      </q-avatar>
      <div class="pl-2">Min Y.</div>
    </div>
  </div>
</template>
