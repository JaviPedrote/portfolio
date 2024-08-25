<template>
  <div
    className=" sticky top-0 bg-black text-white text-2xl h-10 w-screen font-bold underline "
  >
  <RouterLink to="/">Home</RouterLink>
  </div>
  <div
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    className=" bg-cover bg-center lg:w-[100%]  fixed h-screen w-screen"
  ></div>
  <main class="flex items-center">
      <RouterView v-slot="{Component}">
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </RouterView>
    </main>
</template>

<script setup lang="ts">
import backgroundImage from '../assets/images/Bg.jpg'
</script>
