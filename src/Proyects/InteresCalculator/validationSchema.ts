import * as yup from 'yup'

const español = {
  mixed: {
    default: 'No es válido',
    required: 'Este campo es requerido',
    oneOf: 'Debe ser uno de los siguientes valores: ${values}',
    notOneOf: 'No debe ser uno de los siguientes valores: ${values}',
    defined: 'Debe estar definido',
    notNull: 'No puede ser nulo',
    notType: 'Debe ser de tipo ${type}'
  },
  string: {
    length: 'Debe tener exactamente ${length} caracteres',
    min: 'Debe tener al menos ${min} caracteres',
    max: 'Debe tener como máximo ${max} caracteres',
    email: 'Debe ser un correo electrónico válido',
    url: 'Debe ser una URL válida',
    trim: 'No debe contener espacios al inicio o al final',
    lowercase: 'Debe estar en minúsculas',
    uppercase: 'Debe estar en mayúsculas',
    matches: 'Debe coincidir con el siguiente patrón: "${regex}"'
  },
  number: {
    min: 'Debe ser mayor o igual a ${min}',
    max: 'Debe ser menor o igual a ${max}',
    lessThan: 'Debe ser menor a ${less}',
    moreThan: 'Debe ser mayor a ${more}',
    positive: 'Debe ser un número positivo',
    negative: 'Debe ser un número negativo',
    integer: 'Debe ser un número entero'
  },
  date: {
    min: 'Debe ser posterior a ${min}',
    max: 'Debe ser anterior a ${max}'
  },
  array: {
    min: 'Debe tener al menos ${min} elementos',
    max: 'Debe tener como máximo ${max} elementos'
  }
}

export const schema = yup.object({
  deuda: yup
    .number().typeError('Debe ser un número')
    .required('Este campo es requerido')
    .positive(español.number.positive)
    .integer()
    .min(100, 'Debe ser mayor o igual a 100'),
  años: yup.number().typeError('Debe ser un número').required(español.mixed.required).positive(español.number.positive),
  intereses: yup.number().typeError('Debe ser un número').required().positive(español.number.positive)
})
