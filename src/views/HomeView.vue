<template>
  <div className="m-2 mt-6 flex flex-col text-white gap-10">

    <div className="flex flex-wrap w-full h-1/3">
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52 lg:w-[140px]  xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52 lg:w-[140px]  xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52 lg:w-[140px]  xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
      <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
        <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
        <img
          className="w-36 md:w-52 lg:w-[140px] xl:w-60 h-auto rounded-lg"
          :src="calcHipoteca"
          alt="Proyecto1"
        />
      </RouterLink>
    </div>

    <div className="w-auto h-1/3">
      <img :src="backgroundImage" alt="" />
    </div>

    <div className="flex flex-wrap w-full h-1/3">
      
        <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
          <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
          <img
            className="w-36 md:w-52 lg:w-[140px]  xl:w-60 h-auto rounded-lg"
            :src="calcHipoteca"
            alt="Proyecto1"
          />
        </RouterLink>
        <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
          <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
          <img
            className="w-36 md:w-52 lg:w-[140px]  xl:w-60 h-auto rounded-lg"
            :src="calcHipoteca"
            alt="Proyecto1"
          />
        </RouterLink>
        <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
          <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
          <img
            className="w-36 md:w-52 lg:w-[140px]  xl:w-60 h-auto rounded-lg"
            :src="calcHipoteca"
            alt="Proyecto1"
          />
        </RouterLink>
        <RouterLink className="flex flex-col items-center lg:w-auto w-1/2 p-2" to="/Proyecto1">
          <span className="text-[0.78rem] flex-grow">Calculadora de hipotecas</span>
          <img
            className="w-36 md:w-52 lg:w-[140px] xl:w-60 h-auto rounded-lg"
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
