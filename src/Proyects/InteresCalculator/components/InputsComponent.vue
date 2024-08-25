<template>
  <div className="lg:absolute border border-red-500 flex flex-col lg:flex-row lg:w-screen">
    <div
      className="lg:relative border border-red-500 relative p-6  bg-white w-screen h-[500px] sm:h-[550px] lg:h-screen lg:w-[50%] flex flex-col text-start"
    >
      <h1 className=" text-xl font-bold mb-4 underline">Calculadora de hipotecas</h1>
      <div className="flex  place-content-start">
        <button
          @click="clearInputs"
          className=" font-semibold text-md mb-3 h-7 w-20 bg-VerdeResultado text-white rounded hover:opacity-90 active:opacity-80 r-0"
        >
          Clear
        </button>
      </div>
      <Form className="flex flex-col gap-2" @submit.prevent="onSubmit" :validation-schema="schema">
        <label className="text-md font-semibold" for="deuda">Deuda Hipoteca:</label>
        <div className=" rounded-md border inset-y-0 flex items-center mb-1">
          <span
            className=" h-8 px-4 rounded-s-md text-gray-500 font-semibold text-center bg-Celeste content-center"
            >€</span
          >
          <Field
            className="w-full rounded-md text-gray-900 focus:outline-none pl-2"
            placeholder="Ingrese la cantidad de la deuda"
            v-model="deuda"
            type=""
            id="deuda"
            name="deuda"
          />
        </div>
        <ErrorMessage className="-my-1 text-red-500" name="deuda" />
        <label className="text-md font-semibold" for="años">Años restantes:</label>
        <div className=" rounded-md border inset-y-0 flex items-center mb-1">
          <Field
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
        <ErrorMessage className="-my-1 text-red-500" name="años" />
        <label className="text-md font-semibold" for="años">Interes banco + Euribor:</label>
        <div className=" rounded-md border inset-y-0 flex items-center mb-2">
          <Field
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
        <ErrorMessage className=" -my-1 text-red-500" name="intereses" />
        <button
          className=" flex gap-3 place-content-center items-center font-bold bg-Lime mt-4 rounded-lg h-9 sm:h-12 sm:text-lg"
          type="submit"
          @click="calcularResultado(deuda, años, intereses)"
        >
          <img src="../images/icon-calculator.svg" />Calcular Pago
        </button>
      </Form>
    </div>

    <div className="relative border border-red-600 flex bg-VerdeResultado w-screen lg:w-[50%] lg:h-screen h-[450px] sm:h-[600px] sm:pt-8">
      <ResultComponent :prop1="resultado" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { numberCalculator } from '../composable/useNumberCalculator'
import ResultComponent from './resultComponent.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '@/Proyects/InteresCalculator/validationSchema'

const { deuda, años, intereses, calcularResultado, resultado, clearInputs } = numberCalculator()

const onSubmit = (values: any) => {
  console.log(values)
}
</script>
