<script setup>
import { onMounted, reactive, ref } from 'vue';
import { examplesApi } from '@/apis/examples';
</script>

<template>
  <div class="h-full flex flex-col p-2">
    <div class="flex justify-between items-center p-2 cursor-pointer rounded relative hover:bg-gray-800" v-ripple>
      <q-avatar size="md">
        <img src="icons/favicon-128x128.png" />
      </q-avatar>
      <div class="flex-1 pl-2">新会话</div>
      <q-icon name="edit" size="xs" />
    </div>

    <div></div>

    <div class="flex items-center p-2 cursor-pointer rounded relative hover:bg-gray-800" v-ripple>
      <q-avatar size="md">
        <img src="icons/favicon-128x128.png" />
      </q-avatar>
      <div class="pl-2">Min Y.</div>
    </div>
  </div>
</template>
