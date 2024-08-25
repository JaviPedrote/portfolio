<template>
  <nav className="absolute top-12 flex flex-wrap place-content-center w-screen h-auto ">
    <div
      className="bg-black text-white place-content-center rounded-lg m-10 text-[1.5em]"
    >
      <RouterLink to="/Proyecto1">InterestCalculator</RouterLink>
    </div>
   </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
