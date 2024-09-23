<template>
  <div className="w-full bg-white z-30">
    <div>
      <div className="relative flex place-content-between w-full pb-2 pl-[20px] h-16 md:h-[4.6rem]">
        <div className="flex items-center gap-4 w-[50%] md:pl-[5.25rem]">
          <img src="../images/icon-menu.svg" @click="() => props.toggleModal()" className="h-[14px] cursor-pointer md:hidden" alt="menu" />
          <img src="../images/logo.svg" className="md:w-[6.5rem]" alt="logo" />
          <ul className=" hidden md:flex items-center  text-[0.7rem] pl-[1.5rem] tracking-tight">
            <li>Collecctions</li>
            <li className="pl-6">Men</li>
            <li className="pl-7">Women</li>
            <li className="pl-7">About</li>
            <li className="pl-7">Contact</li>
          </ul>
        </div>
        <div className=" absolute hidden md:block border-b-[1px] w-[76%]  top-[4.5rem] left-[6.75rem]"></div>
        <div v-if="modal" className="md:hidden">
          <ul className="absolute z-30 opacity-100 left-0 top-0 bg-white h-screen w-[70%]">
            <div className="flex flex-col gap-5 items-start pl-6 pt-5 font-bold text-lg">
              <img src="../images/icon-close.svg" @click="() => props.toggleModal()" className=" mb-8 cursor-pointer" alt="" />
              <li>Collecctions</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </div>
          </ul>
          <div className="absolute top-0 opacity-70 right-0 bg-black w-[30%] h-screen"></div>
        </div>
        <div v-else></div>
        <div className="flex gap-3 items-center pr-7 md:pr-[8.5rem] md:gap-9">
          <div @click="cartModal()" className="relative flex w-7 h-8 items-center cursor-pointer md:w-[1rem] md:h-6">
            <div
              className="absolute bg-orange-400 flex text-white w-[63%] top-0 md:-right-1 h-3 text-[10px] md:text-[7px] rounded-md items-center place-content-center right-0 md:h-2"
            >
              {{ totalCart }}
            </div>
            <img  src="../images/icon-cart-black.svg" alt="" />
          </div>
          <img src="../images/image-avatar.png" className="w-6 md:w-9 cursor-pointer border-2 rounded-full hover:border-orange-400" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  totalCart: number;
  modal: boolean;
  cartM: boolean;
  toggleModal: Function;
  cartModal: Function;
}>();




</script>
