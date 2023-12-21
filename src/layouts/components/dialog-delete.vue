<script lang="ts" setup>
const props = defineProps<{ chat: any }>();
const emit = defineEmits(['update:model-value']);

const cancel = (): void => emit('update:model-value', false);
</script>

<template>
  <q-dialog v-bind="$attrs" @hide="cancel">
    <q-card class="w-96">
      <div class="flex justify-between items-center py-2 px-4">
        <div class="text-base">删除会话？</div>
        <q-btn icon="close" dense flat round v-close-popup />
      </div>
      <q-separator />
      <div>{{ props.chat.id.value }}</div>
    </q-card>
  </q-dialog>
</template>
