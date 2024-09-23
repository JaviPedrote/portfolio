<template>
  <div className="absolute top-9 w-screen h-screen font-kumbh bg-white">
    <div className="md:p-2  bg-white">
      <HeaderEcommerce
      :totalCart="totalCart"
      :cartM="cartM"
      :toggleModal="toggleModal"
      :cartModal="cartModal"
      :modal="modal"
      />
      <TargetCart :cart="cart" :cartM="cartM" />
      <PhotoDeatilsProduct />
      <TotalCart
      :quantity="quantity"
      :increment="increment"
      :decrement="decrement"
      :cart="cart"
      :addCart="addCart"
      :total-cart="totalCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import TotalCart from './Componentes/TotalCart.vue'
import HeaderEcommerce from './Componentes/HeaderEcommerce.vue'
import PhotoDeatilsProduct from './Componentes/PhotoDeatilsProduct.vue'
import { useCartEcommerce } from './composable/useCartEcommerce'
import TargetCart from './Componentes/TargetCart.vue'



const {
  quantity,
  increment,
  decrement,
  addCart,
  totalCart,
  cart,
  cartM,
  toggleModal,
  cartModal,
  modal
} = useCartEcommerce()

</script>
