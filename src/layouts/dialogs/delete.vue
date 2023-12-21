<script setup>
defineOptions({ name: 'delete-dialog' });

const props = defineProps({
  chat: Object
});
const emit = defineEmits(['confirm', 'update:model-value']);

const confirm = () => {
  emit('confirm', true);
  cancel();
};
const cancel = () => {
  emit('update:model-value', false);
};
</script>

<template>
  <q-dialog v-bind="$attrs" @hide="cancel">
    <q-card class="w-96">
      <div class="flex justify-between items-center px-4 py-2">
        <span class="text-base">删除会话？</span>
        <q-btn icon="close" dense flat round v-close-popup />
      </div>
      <q-separator />
      <div class="p-4">{{ chat.email }}</div>
      <div class="flex justify-end px-4 pb-4 space-x-2">
        <q-btn @click="cancel" label="取消" color="grey-5" outline />
        <q-btn @click="confirm" label="删除" color="negative" unelevated />
      </div>
    </q-card>
  </q-dialog>
</template>
