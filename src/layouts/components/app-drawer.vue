<script lang="ts" setup></script>

<template>
  <div class="p-4">
    <q-list>
      <q-item class="rounded p-2" clickable v-ripple>
        <q-item-section class="pr-2" avatar>
          <q-avatar size="md">
            <img src="icons/favicon-128x128.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>New chat</q-item-section>
        <q-item-section side>
          <q-icon size="xs" name="edit" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
