<template>
    <div v-if="cartM" className="absolute z-20 bg-white h-[15.4rem] w-[94%] mx-[2%] mt-[0.5rem] rounded-xl text-start text">
        <div className="absolute flex border-b-2 border-slate-100 w-full py-[1.3rem] pl-5 font-bold text-sm">Cart</div>
        <div v-if="cart?.length==0" className="w-full h-[30%] text-center py-[8.5rem] text-[15px] font-semibold text-slate-900 opacity-70">Your cart is empty.</div>
        <div v-else className="absolute mt-20 h-[6rem] overflow-y-auto custom-scrollbar w-[100%]  pl-5 right-0 ">
          <div v-for="(item, index) in props.cart" :key="index" className="">
            <div className="flex items-center place-content-center gap-1 mb-2 space-x-3">
              <img :src="foto" className="h-12  rounded-md " alt="FotoProduct">
              <div className=" text-[15px]">
                <h3 className="w-full opacity-60 text-sm tracking-wider">{{ item.name }}</h3>                     
                <span className="opacity-60">${{ item.price }}.00</span>
                <span className="opacity-60"> x {{ item.quantity }}</span>
                <span className="font-extrabold"> ${{ item.price*item.quantity }}.00 </span>
              </div>
              <img className="pl-1" :src="fotoDelete" alt="">
            </div>        
          </div>
        </div>
        <div v-if="cart?.length==0"></div>    
        <div v-else className="absolute w-full bottom-2 ">
          <button  className="flex gap-4 mx-auto bg-orange-500 w-[92%] h-12 rounded-md place-content-center items-center text-base font-bold blac">
            Checkout            
          </button>
        </div>  
    </div>
</template>

<script setup lang="ts">
import foto from '../images/image-product-1-thumbnail.jpg'
import fotoDelete from '../images/icon-delete.svg'

interface CartItem {
    name: string;
    quantity: number;
    price: number;
    // Add other properties of CartItem if needed
}

const props = defineProps<{
    cart: CartItem[];
    cartM: boolean;
}>();
</script>
