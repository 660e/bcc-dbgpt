<script setup>
import { onMounted, ref } from 'vue';
import { examplesApi } from '@/apis/examples';

import DeleteDialog from '../dialogs/delete.vue';

const current = ref();
const chats = ref();
const deleteDialog = ref(false);

const deleteChat = chat => {
  current.value = chat;
  deleteDialog.value = true;
};

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
        <q-icon name="more_horiz" size="xs">
          <q-menu class="w-40 bg-gray-800">
            <q-list>
              <q-item @click="deleteChat(chat)" class="text-red-500" clickable v-close-popup>
                <q-item-section class="pr-2" avatar>
                  <q-icon name="delete" size="xs" />
                </q-item-section>
                <q-item-section>删除会话</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-icon>
      </div>
    </div>

    <div class="flex items-center p-2 cursor-pointer rounded relative hover:bg-gray-800" v-ripple>
      <q-avatar size="md">
        <img src="icons/favicon-128x128.png" />
      </q-avatar>
      <div class="pl-2">Min Y.</div>
    </div>
  </div>

  <delete-dialog v-model="deleteDialog" :chat="current" />
</template>
