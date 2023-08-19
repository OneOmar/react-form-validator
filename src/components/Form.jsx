import React, { useState } from 'react'
import { Input } from './Input'
import { inputs } from '../utils/inputValidations'

export const Form = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: ''
    })

    // See https://getbootstrap.com/docs/5.3/forms/validation
    const [formClass, setFormClass] = useState('need-validation')

    // Add a pattern value to Confirm Password Input
    inputs[4].pattern = values.password

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormClass('was-validated')
    }

    return (
        <form className={formClass} noValidate onSubmit={handleSubmit}>
            {inputs.map(input => {
                return <Input
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
            })}
            <div className='d-grid'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}
