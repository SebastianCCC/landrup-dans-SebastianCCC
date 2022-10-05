import * as yup from 'yup'

export const schema = yup
  .object({
    username: yup.string().required('Dit brugernavn er påkrævet').min(5, 'Brugernavn er for kort'),
    password: yup
      .string()
      .required('Din adgangskode er påkrævet')
      .min(4, 'adgangskode er for kort'),
  })
  .required()
