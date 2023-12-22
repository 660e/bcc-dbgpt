<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

import AppDrawer from './components/drawer.vue';

defineOptions({ name: 'app-layout' });

const $q = useQuasar();
$q.dark.set(true);

const drawer = ref(true);
const tweak = (offset, height) => ({ height: `${height - offset}px` });
</script>

<template>
  <q-layout view="hhh lpr fff" class="overflow-hidden">
    <q-drawer v-model="drawer" :width="260">
      <app-drawer />
    </q-drawer>
    <q-page-container>
      <q-page :style-fn="tweak" class="overflow-auto relative">
        <div @click="drawer = !drawer" class="flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 w-8 h-16 cursor-pointer">
          <b class="w-1 h-5 bg-gray-400 rounded-sm"></b>
        </div>
        <div
          class="absolute bottom-2 right-2 cursor-pointer text-gray-400 bg-gray-800 border border-gray-600 rounded-full h-7 w-7 flex justify-center items-center"
        >
          <span>?</span>
        </div>
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
