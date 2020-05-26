import * as yup from 'yup'


const formSchema = yup.object().shape({
          
    username: yup.string()
    .trim()
    .min(3, 'The username must be at least three characters')
    .required('The username is a required field'),

    password: yup.string()
    .trim()
    .min(4,'The password must be at least four characters')
    .required('The password is a required field'),

    name:yup.string()


})

export default formSchema