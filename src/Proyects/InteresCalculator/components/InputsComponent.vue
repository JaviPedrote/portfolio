<template>
  <div className="relative p-6  bg-white w-screen h-[450px] flex flex-col text-start">
    <div className="flex place-content-center">
      <button
      @click="clearInputs"
      className=" h-12 w-32 bg-VerdeResultado text-white rounded hover:opacity-90 active:opacity-80 r-0"
      >
      Clear
    </button>
  </div>   
    <form className="flex flex-col" @submit.prevent="">
      <label for="deuda">Deuda Hipoteca:</label>
      <div className=" rounded-md border inset-y-0 flex items-center">
        <span
          className=" h-8 px-4 rounded-s-md text-gray-500 font-semibold text-center bg-Celeste content-center"
          >€</span
        >
        <input
          className="w-full rounded-md text-gray-900 focus:outline-none pl-2"
          placeholder="Ingrese la cantidad de la deuda"
          v-model="deuda"
          type=""
          id="deuda"
          name="deuda"
        />
      </div>
      <label for="años">Años restantes:</label>
      <div className=" rounded-md border inset-y-0 flex items-center">
        <input
          className="w-full rounded-md text-gray-900 focus:outline-none pl-2"
          placeholder="Ingrese los años restantes"
          v-model="años"
          type=""
          id="años"
          name="años"
        />
        <span
          className=" h-8 px-4 rounded-e-md text-gray-500 font-semibold text-center bg-Celeste content-center"
          >years</span
        >
      </div>
      <label for="años">Interes banco + Euribor:</label>
      <div className=" rounded-md border inset-y-0 flex items-center">
        <input
          className="w-full rounded-md text-gray-900 focus:outline-none pl-2"
          placeholder="Ingrese el euribor + diferencial"
          v-model="intereses"
          type=""
          id="intereses"
          name="intereses"
        />
        <span
          className=" h-8 px-4 rounded-e-md text-gray-500 font-bold text-center bg-Celeste content-center"
          >%</span
        >
      </div>

      <button
        className=" flex gap-3 place-content-center items-center font-bold bg-Lime mt-4 rounded-full h-9"
        type="submit"
        @click="calcularResultado(deuda, años, intereses)"
      >
        <img src="../images/icon-calculator.svg" />Calcular Pago
      </button>
    </form>
  </div>
  <div className="relative flex bg-VerdeResultado w-screen h-[450px] sm:h-[500px]">
    <div v-if="resultado === 0" className="flex flex-col absolute items-center w-full gap-6 p-10">
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
        <p className="text-white px-12">Su pago mensual es de:</p>
        <p className="text-white text-3xl px-12">{{ resultado }}€</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { numberCalculator } from '../composable/useNumberCalculator'
import calculadora from '../images/illustration-empty.svg'

const { deuda, años, intereses, calcularResultado, resultado , clearInputs } = numberCalculator()
</script>
