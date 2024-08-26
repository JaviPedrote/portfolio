<template>
  
 <div className="">
    <div v-if="prop1 === 0" className="flex flex-col absolute items-center lg:place-content-center h-[80%] w-full gap-6 p-10  rounded-e-3xl">
      <img :src="calculadora" alt="Icono" className=" w-40 h-40 bg-VerdeResultado" />
      <h1 className="text-xl font-semibold text-white">Resultados mostrados aquí.</h1>
      <p className="text-slate-400 px-12">
        Completa el formulario para que los resultados sean mostrados aquí
      </p>
    </div>
    <div v-else>
      <div className="flex flex-col absolute items-center lg:place-content-center h-[80%] w-full gap-6 p-10  rounded-e-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Resultados</h1>
        <p className="text-white md:text-lg px-12">Estos son los resultados de su hipoteca.</p>
        <div className="border-t-[6px] border-Lime flex flex-col text-left bg-VerdeTarjeta px-6 w-72 h-[70%] md:w-96 md:h-60 lg:w-96 lg:h-56 rounded-2xl justify-center">
          <p className="text-slate-400 font-semibold md:text-lg mb-1 md:mb-3">Pagará al mes un total de :</p>
          <p className="text-Lime text-3xl md:text-5xl">{{ prop1 }}€</p>
          <div className="border border-slate-600 my-1 md:my-4"></div>
          <p className="text-slate-400 font-semibold md:text-lg mb-1 md:mb-3">Le queda por pagar:</p>
          <p className="text-Lime text-3xl md:text-5xl">{{ Number((prop1*(prop2*12)).toFixed(2)) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import calculadora from '../images/illustration-empty.svg'

defineProps<{ prop1: number , prop2:number }>()
</script>
