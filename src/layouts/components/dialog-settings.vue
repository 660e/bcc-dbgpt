<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const emit = defineEmits(['update:model-value']);

const cancel = (): void => emit('update:model-value', false);

const tab = ref('general');

const theme = ref($q.dark.isActive ? 'dark' : 'light');
const themes = reactive([
  { label: '暗色', value: 'dark' },
  { label: '亮色', value: 'light' }
]);
const update = (value: string): void => $q.dark.set(value === 'dark');
</script>

<template>
  <q-dialog v-bind="$attrs" @hide="cancel">
    <q-card>
      <div class="flex justify-between items-center py-2 px-4">
        <div class="text-base">设置</div>
        <q-btn icon="close" dense flat round v-close-popup />
      </div>
      <q-separator />
      <div class="h-60 flex">
        <q-tabs v-model="tab" class="p-4 w-36" align="left" dense inline-label vertical>
          <q-tab name="general" icon="settings" label="通用" class="justify-start rounded" />
        </q-tabs>
        <q-tab-panel name="general" class="w-96">
          <div class="flex justify-between items-center">
            <span>主题</span>
            <q-select v-model="theme" :options="themes" @update:model-value="update" dense emit-value map-options outlined />
          </div>
        </q-tab-panel>
      </div>
    </q-card>
  </q-dialog>
</template>
