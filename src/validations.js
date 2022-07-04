import * as yup from 'yup'

const validations = yup.object().shape({
    name:yup.string().required('Zorunlu Alan'),
    director:yup.string().required('Zorunlu Alan'),
    actors:yup.string().required('Zorunlu Alan'),
    point:yup.string().required('Zorunlu Alan'),
    posterUrl:yup.string().required('Zorunlu Alan'),
    title:yup.string().required('Zorunlu Alan')
})
export default validations