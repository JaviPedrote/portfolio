<template>
  <nav className="absolute top-12 flex flex-wrap w-1/3 pl-12 pt-8 ">
    <div
      className="flex flex-row flex-wrap bg-black gap-20 text-white text-start"
    >
      <RouterLink className=" text-base" to="/Proyecto1">Calculadora de hipotecas<img className="w-48" :src=calcHipoteca alt="Proyecto1"></RouterLink>
      <RouterLink className=" text-base" to="/Proyecto1">Calculadora de hipotecas<img className="w-48" :src=calcHipoteca alt="Proyecto1"></RouterLink>

      <RouterLink className=" text-base" to="/Proyecto1">Calculadora de hipotecas<img className="w-48" :src=calcHipoteca alt="Proyecto1"></RouterLink>
      <RouterLink className=" text-base" to="/Proyecto1">Calculadora de hipotecas<img className="w-48" :src=calcHipoteca alt="Proyecto1"></RouterLink>
      <RouterLink className=" text-base" to="/Proyecto1">Calculadora de hipotecas<img className="w-48" :src=calcHipoteca alt="Proyecto1"></RouterLink>
      <RouterLink className=" text-base" to="/Proyecto1">Calculadora de hipotecas<img className="w-48" :src=calcHipoteca alt="Proyecto1"></RouterLink>

      
    </div>
   
   </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import  calcHipoteca from '@/assets/images/Proyecto1.jpg'

</script>
