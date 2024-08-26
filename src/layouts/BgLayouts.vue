<template>
  <div
    className="absolute top-0 bg-black text-white text-2xl w-screen h-screen font-bold underline "
  >
  <RouterLink to="/">Home</RouterLink>
  <div className="flex place-content-center pb-0 items-center w-[100%] h-[95%]">
    <div
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    className="absolute bg-cover w-60 h-36 bg-black md:w-68 md:h-36 lg:w-[26rem] lg:h-60"
    >
    </div>
  </div>

  </div>
  <main class="items-center">
      <RouterView v-slot="{Component}">
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </RouterView>
    </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import backgroundImage from '../assets/images/Bg.jpg'

</script>
