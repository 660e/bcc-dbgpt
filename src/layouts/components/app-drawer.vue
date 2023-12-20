<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { examplesApi } from '@/apis/examples';

const chats = ref();

onMounted(() => {
  examplesApi
    .randomuser({ results: 5 })
    .then(response => {
      chats.value = response.data.results;
      console.log(chats.value);
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => {
      console.log('finally');
    });
});
</script>

<template>
  <div class="h-full p-4 space-y-4 flex flex-col">
    <q-list>
      <q-item class="rounded p-2" clickable v-ripple>
        <q-item-section class="pr-2" avatar>
          <q-avatar size="md">
            <img src="icons/favicon-128x128.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>New chat</q-item-section>
        <q-item-section side>
          <q-icon name="edit" size="xs" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="flex-1 space-y-2">
      <q-item v-for="chat in chats" :key="chat.id.value" class="rounded py-0 px-2 min-h-[32px]" clickable v-ripple>
        <q-item-section>{{ chat.name.title }} {{ chat.name.first }} {{ chat.name.last }}</q-item-section>
        <q-item-section side>
          <q-icon name="more_horiz" size="xs" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list>
      <q-item class="rounded p-2" clickable v-ripple>
        <q-item-section class="pr-2" avatar>
          <q-avatar size="md">
            <img src="icons/favicon-128x128.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Min Y.</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
