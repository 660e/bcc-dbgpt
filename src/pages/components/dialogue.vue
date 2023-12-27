<script setup>
import { useChatStore } from '@/stores/store';

defineOptions({ name: 'dialogue-component' });

const $store = useChatStore();
</script>

<template>
  <div class="w-[800px] space-y-8 py-8 text-base">
    <div v-for="message in $store.messages" :key="message.id" class="space-y-8">
      <div class="flex space-x-4 pr-10">
        <div>
          <q-avatar color="primary" text-color="white" size="sm">Y</q-avatar>
        </div>
        <div class="flex-1">
          <div>Min Y.</div>
          <div>{{ message.user.data }}</div>
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
          <div>{{ message.assistant.data }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
