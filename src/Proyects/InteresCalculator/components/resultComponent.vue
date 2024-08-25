<template>
  
 <div className="">
    <div v-if="prop1 === 0" className="flex flex-col absolute items-center w-full gap-6 p-10">
      <img :src="calculadora" alt="Icono" className=" w-40 h-40 bg-VerdeResultado" />
      <h1 className="text-xl font-semibold text-white">Resultados mostrados aquí.</h1>
      <p className="text-slate-400 px-12">
        Completa el formulario para que los resultados sean mostrados aquí
      </p>
    </div>
    <div v-else>
      <div className="flex flex-col absolute items-center w-full gap-6 p-10">
        <h1 className="text-3xl font-semibold text-white">Resultados</h1>
        <p className="text-white px-12">Estos son los resultados de su hipoteca.</p>
        <p className="text-white text-3xl px-12">{{ prop1 }}€</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import calculadora from '../images/illustration-empty.svg'

defineProps<{ prop1: number }>()
</script>
