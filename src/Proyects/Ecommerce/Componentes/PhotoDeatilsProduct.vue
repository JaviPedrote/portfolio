<template>
  <div className="">
    <div
      className="flex flex-wrap md:flex-nowrap md:flex md:flex-row gap-4 md:gap-12 md:pt-16 md:items-start items-center md:pl-[9rem]"
    >
      <!-- flecha fotos -->

      <!-- fotos -->
      <div
        className="w-full md:w-[34rem] md:h-[25.2rem] md:flex md:flex-col md:place-content-between place-content-center"
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
          className="w-full h-[290px] md:h-[20.5rem] md:rounded-lg  md:mb-4 object-cover"
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
      <div className="md:h-full md:flex md:flex-col md:tracking-wider">
        <div
          className=" text-left px-6 pt-3 pb-5 bg-white md:pt-12 md:pl-10 md:pr-[30%] md:flex md:flex-col md:pb-3"
        >
          <h2
            className="uppercase text-[11px] font-bold text-slate-600 tracking-[2px] md:tracking-[1.7px] md:text-[9px] md:pb-2"
          >
            Sneaker Company
          </h2>
          <h1
            className=" font-exbold text-[26px] mt-1 mb-3 leading-8 md:leading-9 md:text-[30px] md:font-exbold"
          >
            Fall Limited Edition Sneakers
          </h1>
          <p
            className=" text-sm pt-0 tracking-[0.5px] leading-6 md:text-[11px] md:pt-4 md:leading-[1.1rem] md:tracking-[0.6px]"
          >
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable
            rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
        </div>
        <!-- precio -->
        <div
          className=" md:flex md:flex-col pl-5 pr-10 flex place-content-between  md:items-start md:gap-2 md:pl-10"
        >
          <div
            className="gap-4 flex flex-row items-center h-[2rem] md:h-full text-[28px] md:text-lg font-exbold bg-white  md:bg-transparent "
          >
            <p>€{{ priceDiscount }}.00</p>
            <p
              className="bg-black text-white font-bold items-center place-content-center h-[26px] rounded-md text-base mt-1 w-12 md:w-9 md:rounded md:h-5 md:text-xs"
            >
              {{ discount }}%
            </p>
          </div>
          <div className="text-base font-bold text-slate-500 line-through bg-white md:text-xs mb-7">
            <p>€{{ price }}.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const price = ref(250)
const discount = ref(50)
const priceDiscount = price.value * (discount.value / 100)
</script>
