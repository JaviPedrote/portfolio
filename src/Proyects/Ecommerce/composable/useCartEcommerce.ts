import { ref } from 'vue'

export function useCartEcommerce() {
  interface CartItem {
    name: string;
    quantity: number;
    price: number;
  }
  

  const product = 'Fall Limited Edition Sneakers'
  
  const quantity = ref(0)
  const cart = ref<CartItem[]>([])
  const totalCart = ref(0)
  const products = ref<string[]>([])
  const modal = ref(false)
  const cartM = ref(false)

const cartModal = () => {
  cartM.value = !cartM.value
  modal.value = false
}
const toggleModal = () => {

  modal.value = !modal.value
  cartM.value = false
}

  const increment = () => {
    quantity.value++
  }

  const decrement = () => {
    if (quantity.value > 0) {
      quantity.value--
    }
  }

  const addCart = () => {
    cart.value.push({
      name: product,
      quantity: quantity.value,
      price: 125

    }); 
    totalCart.value = totalCart.value + quantity.value  
    quantity.value = 0;  
  }
 
  return {
    // Variables
    cartM,
    modal,
    product,
    quantity,
    cart,
    totalCart,
    products,
    
    // Funciones
    cartModal,
    toggleModal,
    increment,
    decrement,
    addCart
  }
}
