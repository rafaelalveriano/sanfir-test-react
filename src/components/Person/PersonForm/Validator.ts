import * as Yup from 'yup'

export default Yup.object({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Email inválido!')
    .required('O email é obrigatório'),
  birthdata: Yup.string().required('A data de nascimento obrigatório'),
  city: Yup.string().required('A cidade é obrigatório'),
  uf: Yup.string().required('A cidade é obrigatório'),
})
