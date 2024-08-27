<template>
  <div className="flex flex-col text-white gap-1 h-screen lg:flex-row lg:w-screen t-4" >
    <div className="flex flex-wrap place-content-around w-full h-1/3  px-1 lg:h-full lg:w-1/3 lg:flex-col">
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52  xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52   xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52   xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52  xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
    </div>

    <div className="w-[100%] flex place-content-center lg:w-1/3 lg:flex-col lg:item-center m-auto">
      <img className=" w-[80%] lg:w-full" :src="backgroundImage" alt="" />
    </div>

    <div className="flex flex-wrap place-content-around w-full h-1/3  px-1 lg:h-full lg:w-1/3 lg:flex-col">
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52  xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52   xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52   xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52  xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
    </div>


  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import calcHipoteca from '@/assets/images/Proyecto1.jpg'
import backgroundImage from '../assets/images/Bg.jpg'
</script>
