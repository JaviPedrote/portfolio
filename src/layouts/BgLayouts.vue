<template>
  <div
    className="top-0 bg-black text-white text-2xl font-bold underline w-full"
  >
  <RouterLink to="/">Home</RouterLink>

  </div>
  <main class="flex items-center">
      <RouterView v-slot="{Component}">
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </RouterView>
    </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>
