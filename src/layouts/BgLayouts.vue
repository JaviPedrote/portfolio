<!-- border border-red-500 -->
<template>
  <div className="w-screen h-screen">
    <div className=" bg-black text-white text-2xl font-bold underline w-full t-0">
      <RouterLink to="/">Home</RouterLink>
    </div>
      <main className="flex flex-wrap place-content-center items-center justify-center h-[92%]">        <RouterView v-slot="{ Component }">
          <KeepAlive>
            <component :is="Component"></component>
          </KeepAlive>
        </RouterView>
      </main>
    
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
