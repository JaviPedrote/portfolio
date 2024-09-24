<template>
  <div className="">
    <div
      className="flex flex-wrap md:flex-nowrap md:flex md:flex-row gap-4 md:gap-12 md:pt-[4.5rem] md:items-start items-center md:pl-[9.5rem] bg-white"
    >
      <!-- flecha fotos -->

      <!-- fotos -->
      <div
        className="w-full md:w-[41rem] md:h-[25.8rem] md:flex md:flex-col md:place-content-between place-content-center"
      >
        <div
          className="md:hidden absolute top-48 flex left-4 bg-slate-200 rounded-full w-9 h-9 place-content-center items-center"
        >
          <img src="../images/icon-previous.svg" className="h-3" alt="back" />
        </div>
        <div
          className="md:hidden absolute top-48 flex right-4 bg-slate-200 rounded-full w-9 h-9 place-content-center items-center"
        >
          <img src="../images/icon-next.svg" className="h-3" alt="back" />
        </div>
        <img
          src="../images/image-product-1.jpg"
          className="w-full h-[300px] md:h-[20.5rem] md:rounded-lg  md:mb-4 md:min-w-[250px] object-cover"
          alt="back"
        />

        <!-- fotos peq -->
        <div className="flex place-content-between">
          <img
            src="../images/image-product-1.jpg"
            className="hidden w-96 md:block md:w-16 md:rounded-lg"
            alt="back"
          />
          <img
            src="../images/image-product-2.jpg"
            className="hidden w-96 md:block md:w-16 md:rounded-lg"
            alt="product"
          />
          <img
            src="../images/image-product-3.jpg"
            className="hidden w-96 md:block md:w-16 md:rounded-lg"
            alt="product"
          />
          <img
            src="../images/image-product-4.jpg"
            className="hidden w-96 md:block md:w-16 md:rounded-lg"
            alt="product"
          />
        </div>
      </div>

      <!-- detalles -->
      <div className="md:flex md:flex-col md:tracking-wider md:w-auto">
        <div
          className=" text-left px-6 pt-1 pb-5 bg-white md:pt-11 md:pr-0 md:pl-[9%] md:flex md:flex-col md:pb-3 md:w-[82%]"
        >
          <h2
            className="uppercase text-[11px] font-extrabold text-slate-600 tracking-[1.6px] md:tracking-[1.7px] md:text-[9px]"
          >
            Sneaker Company
          </h2>
          <h1
            className=" font-exbold text-[26px] tracking-wide mt-3 mb-3 leading-8 md:leading-9 md:text-[30px] md:font-exbold md:min-w-[300px] "
          >
            Fall Limited Edition Sneakers
          </h1>
          <p
            className=" text-sm tracking-[0.8px] leading-[1.5rem] md:text-[11px] md:pt-4 md:leading-[1.2rem] md:tracking-[0.7px] md:min-w-[200px] "
          >
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable
            rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
        </div>
        <!-- precio -->
        <div
          className=" md:flex md:flex-col pl-[1.55rem] pr-9 flex place-content-between  md:items-start md:pl-[9%] md:-mt-1"
        >
          <div
            className="gap-5 md:gap-3 flex flex-row items-center h-[2rem] md:h-full text-[28px] md:text-[1.4rem] font-exbold bg-white  md:bg-transparent md:tracking-tight "
          >
            <p>€{{ priceDiscount }}.00</p>
            <p
              className="bg-black text-white font-bold items-center place-content-center h-[26px] rounded-md text-base mt-1 w-12 md:w-10 md:rounded md:h-5 md:text-xs"
            >
              {{ discount }}%
            </p>
          </div>
          <div className="text-base font-bold text-slate-500 line-through bg-white md:text-xs mb-[1.35rem]">
            <p className="pt-1">€{{ price }}.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const price = ref(250.00)
const discount = ref(50.00)
const priceDiscount = price.value * (discount.value / 100)
</script>
