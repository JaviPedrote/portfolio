import { ref} from 'vue'


export const numberCalculator = () => {



  const deuda = ref(0)
  const años = ref(0)
  const intereses = ref(0)
  const imag = ref(true)
  const resultado = ref(0)

  const calcularResultado = (deuda: number, años: number, intereses: number) => {
    if (deuda > 0 && años > 0 && intereses > 0) {
      const calculo =
        (deuda * (intereses / 12)) / (100 * (1 - Math.pow(1 + intereses / 1200, -años * 12)))
      resultado.value =Number(calculo.toFixed(2));
     
      return resultado.value
    }
  }

  const clearInputs =()=>{
    deuda.value=0
    años.value=0
    intereses.value=0
    resultado.value=0
  }


  return {
    deuda,
    años,
    intereses,
    imag,
    resultado,
    calcularResultado,
    clearInputs

  }
}
// state: () => ({
//   deuda: 0,
//   años: 0,
//   intereses: 0,
//   imag: true
// }),
// getters: {
//   calcularResultado(): number {
//     const deuda = this.deuda;
//     const años = this.años;
//     const intereses = this.intereses;
//     const resultado= (
//       (deuda * (intereses / 12)) /
//       (100 * (1 - Math.pow(1 + intereses / 1200, -años * 12)))
//     )
//     return resultado;
//   }
// },
// actions: {
//   setImag(value: boolean) {
//     this.imag = value
//   },
//   setDeuda(value: number) {
//     this.deuda = value
//   },
//   setAños(value: number) {
//     this.años = value
//   },
//   setIntereses(value: number) {
//     this.intereses = value
//   },
//   calcHipoteca(deuda: number, años: number, intereses: number) {
//     this.deuda = deuda
//     this.años = años
//     this.intereses = intereses
//   },
//   cambiarImagen() {
//     if (this.imag && this.intereses > 0) {
//       this.imag = !this.imag
//     }
//   }

// }
// }
