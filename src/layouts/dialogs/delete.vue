<script setup>
defineOptions({ name: 'delete-dialog' });

const props = defineProps({
  chat: Object
});
const emit = defineEmits(['confirm', 'update:model-value']);

const cancel = () => {
  emit('update:model-value', false);
};
</script>

<template>
  <q-dialog v-bind="$attrs" @hide="cancel">
    <div>{{ chat.email }}</div>
  </q-dialog>
</template>
