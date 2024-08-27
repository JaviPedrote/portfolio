<template>
  <div className="w-screen h-screen">
    <div className=" bg-black text-white text-2xl font-bold underline w-full h-8 t-0">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div className="flex m-auto">
      <main className="flex place-content-center items-center justify-center m-auto">
        <RouterView v-slot="{ Component }">
          <KeepAlive>
            <component :is="Component"></component>
          </KeepAlive>
        </RouterView>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
