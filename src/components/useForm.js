import {React, useState} from 'react'

export default function useForm(initialValues, validateOnChange=false,validate) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
  
    
    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange){
            validate({[name]: value})
        }
    }

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    }
  
    return {
        values,
        setValues,
        handleChange,
        errors,
        setErrors,
        resetForm,
    }
}
