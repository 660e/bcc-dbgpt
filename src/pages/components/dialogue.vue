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
          <div>bcc</div>
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
          <div v-if="message.assistant">
            <!-- text | number -->
            <div v-if="['text', 'number'].includes(message.assistant.type)">{{ message.assistant.data }}</div>

            <!-- table -->
            <div v-else-if="message.assistant.type === 'table'" class="pt-2">
              <q-markup-table v-if="message.assistant.data.length" class="w-[720px]" separator="cell" bordered dense flat>
                <thead>
                  <tr>
                    <th v-for="(value, key) in message.assistant.data[0]" :key="key" class="text-left">{{ key }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in message.assistant.data" :key="data.id">
                    <td v-for="(value, key) in data" :key="key">{{ value }}</td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>

            <!-- pre -->
            <pre v-else>{{ message.assistant.data }}</pre>
          </div>
          <div v-else>
            <q-spinner-dots size="md" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
