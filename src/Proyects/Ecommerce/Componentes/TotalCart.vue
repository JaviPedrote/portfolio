<template>
  <div
  className="bg-white pt-2 pb-7 gap-4 md:gap-3 bottom-[11rem] right-32 md:flex md:h-14 md:-mt-28 md:w-[10%] md:min-w-[320px] md:ml-custom"
  >
    <div
      className="md:relative flex items-center  bg-slate-100 mx-auto md:ml-[2%] md:mr-0 md:mt-2 w-[88%] rounded-md h-12 place-content-center md:h-10 md:w-28 md:text-sm"
    >
      <img
        @click="() => props.decrement?.()"
        src="../images/icon-minus.svg"
        className="absolute left-[4rem] cursor-pointer md:left-2 md:w-2"
        alt=""
      />
      <input
        type="text"
        className="font-bold bg-slate-100 focus:outline-none rounded-md text-center md:h-10 md:w-2"
        :value="quantity"
      />
      <img
        @click="() => props.increment?.()"
        src="../images/icon-plus.svg"
        className="absolute right-[4rem] cursor-pointer md:right-2 md:w-2"
        alt=""
      />
    </div>
    <button
      @click="addCart?.()"
      className="flex gap-4 mx-auto  mt-4 mb-8 bg-orange-500 w-[88%] h-14 rounded-md place-content-center items-center text-base font-bold md:m-0 md:w-[57%] md:h-10 md:mt-2 md:text-xs"
    >
      <img src="../images/icon-cart-black.svg" className="w-4 md:w-3" alt="" />
      Add to cart
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  quantity: {
    type: Number
  },
  increment: Function,
  decrement: Function,
  addCart: Function,
  totalCart: Number
})
</script>
