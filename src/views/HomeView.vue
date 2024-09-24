<template>
  <div className="text-white relative flex flex-col w-[100%] h-[100%]">
    <div className="relative flex flex-wrap flex-row h-full place-content-around">
      <RouterLink className="flex-auto" to="/Proyecto1">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Calc. de hipotecas</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-cover lg:max-w-[230px] xl:max-w-[300px] rounded-md" :src="calcHipoteca" alt="Proyecto1" />
        </div>
      </RouterLink>

      <RouterLink className="flex-auto" to="/Proyecto2">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Ecommerce</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-cover lg:max-w-[230px] xl:max-w-[300px] rounded-md" :src="ecommerce" alt="Proyecto2" />
        </div>
      </RouterLink>
      <RouterLink className="flex-auto" to="/Proyecto1">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Calc. de hipotecas</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-cover lg:max-w-[230px] xl:max-w-[280px] rounded-md" :src="calcHipoteca" alt="Proyecto1" />
        </div>
      </RouterLink>
      <RouterLink className="flex-auto" to="/Proyecto1">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Calc. de hipotecas</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-cover lg:max-w-[230px] xl:max-w-[300px] rounded-md" :src="calcHipoteca" alt="Proyecto1" />
        </div>
      </RouterLink>
    </div>
  

    <div className="my-5 w-auto md:w-[100%] flex place-content-center h-1/3">
      <img
        className="max-w-full w-[50vh] md:w-[70vh] h-auto mx-aut object-contain"
        :src="backgroundImage"
        alt=""
      />
    </div>

    <div className="relative pb-2 flex flex-wrap flex-row h-full place-content-around">
      <RouterLink className="flex-auto" to="/Proyecto1">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Calc. de hipotecas</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-cover lg:max-w-[230px] xl:max-w-[300px] rounded-md" :src="calcHipoteca" alt="Proyecto1" />
        </div>
      </RouterLink>

      <RouterLink className="flex-auto" to="/Proyecto1">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Calc. de hipotecas</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-cover lg:max-w-[230px] xl:max-w-[300px] rounded-md" :src="calcHipoteca" alt="Proyecto1" />
        </div>
      </RouterLink>
      <RouterLink className="flex-auto" to="/Proyecto1">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Calc. de hipotecas</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-coverlg:max-w-[230px] xl:max-w-[300px] rounded-md" :src="calcHipoteca" alt="Proyecto1" />
        </div>
      </RouterLink>
      <RouterLink className="flex-auto" to="/Proyecto1">
        <div className="flex flex-col items-center">
          <span className="flex-grow text-[clamp(8px,2.5vh,3em)]">Calc. de hipotecas</span>
          <img className="w-[40vw] max-w-[200px] h-[11.6vw] object-cover lg:max-w-[230px] xl:max-w-[300px] rounded-md" :src="calcHipoteca" alt="Proyecto1" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import calcHipoteca from '@/assets/images/Proyecto1.jpg'
import ecommerce from '@/assets/images/Proyecto2.jpg'
import backgroundImage from '../assets/images/Bg.jpg'
</script>
