<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({ name: 'app-home' });

const $route = useRoute();

const text = ref();

watch(
  () => $route.params.id,
  id => {
    console.log(id);
  }
);
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="flex-1">Lorem ipsum dolor sit amet.</div>
    <div class="p-4 flex justify-center">
      <div class="border border-gray-600 rounded-xl w-[750px] flex items-end px-3">
        <q-input v-model="text" class="flex-1 py-2" placeholder="信息..." autogrow borderless dense />
        <div class="pb-3 pl-3">
          <q-btn padding="xs" color="white" text-color="dark" icon="arrow_upward" class="rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>
