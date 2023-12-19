<script lang="ts" setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

defineOptions({ name: 'app-layout' });

const $q = useQuasar();
$q.dark.set(true);

const drawer = ref(true);
// const toggle = () => {
//   drawer.value = !drawer.value;
// };

const tweak = (offset: number, height: number) => ({ height: `${height - offset}px` });
</script>

<template>
  <q-layout view="hhh lpr fff" class="overflow-hidden">
    <!-- <q-btn @click="toggle" icon="menu" dense flat round /> -->
    <!-- <q-btn :icon="$q.dark.isActive ? 'brightness_5' : 'brightness_4'" @click="$q.dark.toggle()" dense flat round /> -->
    <q-drawer v-model="drawer" :width="260" bordered></q-drawer>
    <q-page-container>
      <q-page :style-fn="tweak" class="overflow-auto">
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
