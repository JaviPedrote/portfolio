<template>
  <div
    className="lg:absolute flex flex-col lg:flex-row lg:w-screen lg:h-[94vh] lg:bg-Celeste lg:justify-center lg:items-center"
  >
    <div     className="lg:absolute flex flex-col lg:flex-row lg:w-[80%] lg:h-[77%] lg:bg-white lg:justify-center lg:items-center lg:rounded-3xl"
    >
      <div
        className="relative p-6 bg-white w-screen h-[500px] sm:h-[550px] lg:place-content-center lg:h-[100%] lg:w-[50%] flex flex-col text-start lg:rounded-s-3xl"
      >
      <div className="flex flex-col place-content-start">
        <h1 className=" text-xl font-bold mb-4 underline">Calculadora de hipotecas</h1>
          <button
            @click="clearInputs"
            className="lg:absolute right-10 font-semibold text-md mb-3 h-7 w-20 bg-VerdeResultado text-white rounded hover:opacity-90 active:opacity-80 r-0"
          >
            Clear
          </button>
        </div>
        <Form
          className=" flex flex-col gap-2 lg:h-[80%] lg:place-content-center lg:justify-center"
          @submit.prevent="onSubmit"
          :validation-schema="schema"
        >
          <label className="text-md font-semibold" for="deuda">Deuda Hipoteca:</label>
          <div className=" rounded-md border inset-y-0 flex items-center mb-1">
            <Field
              className="w-full rounded-md text-gray-900  pl-12 flex items-end h-8 focus:border focus:border-Lime focus:outline-none "
              placeholder="Ingrese la cantidad de la deuda"
              v-model="deuda"
              type=""
              id="deuda"
              name="deuda"
              @focus="handleFocus"
              @blur="handleBlur"
            /><span
              :class="[
                'absolute left-6 h-8 px-4 rounded-s-md text-gray-500 font-semibold text-center content-center',
                spanClass
              ]"
              >€</span
            >
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

      <div
        className="relative flex bg-VerdeResultado w-screen  lg:h-[100%] lg:w-[50%] h-[450px] sm:h-[600px] sm:pt-8 lg:rounded-e-3xl lg:rounded-bl-[20%]"
      >
        <ResultComponent :prop1="resultado" :prop2="años" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { numberCalculator } from '../composable/useNumberCalculator'
import ResultComponent from './resultComponent.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '@/Proyects/InteresCalculator/validationSchema'
import { ref } from 'vue'

const { deuda, años, intereses, calcularResultado, resultado, clearInputs } = numberCalculator()

const spanClass = ref('bg-Celeste')

const handleFocus = () => {
  spanClass.value = 'bg-Lime text-slate-800'
}

const handleBlur = () => {
  spanClass.value = 'bg-Celeste'
}
const onSubmit = (values: any) => {
  console.log(values)
}
</script>
