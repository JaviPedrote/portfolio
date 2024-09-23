<template>
    <div className="bg-white pt-2 pb-7 gap-4 bottom-[11rem] right-40 md:flex md:h-14 md:-mt-28 md:hidden">
        <div className="flex items-center md:m-0 bg-slate-100 mx-auto w-[88%] rounded-md h-12 place-content-center">
            <img @click="() => props.decrement?.()" src="../images/icon-minus.svg" className="absolute left-[1.35rem] cursor-pointer" alt="">
            <input type="text" className="font-bold bg-slate-100 focus:outline-none rounded-md text-center" :value="quantity" />
            <img @click="() => props.increment?.()" src="../images/icon-plus.svg" className="absolute right-[1.35rem] cursor-pointer" alt="">
        </div>
          <button @click="addCart?.()" className="flex gap-4 mx-auto mt-4 mb-8 bg-orange-500 w-[88%] h-14 rounded-md place-content-center items-center text-base font-bold md:m-0 ">  
            <img src="../images/icon-cart-black.svg" className="w-4" alt="" />
            Add to cart
            
        </button>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  quantity: {
    type: Number,
  },
  increment: Function,
  decrement: Function,
  addCart: Function,
  totalCart: Number,
})







</script>



