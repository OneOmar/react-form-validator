import React from 'react'

export const Input = ({ onChange, errorMessage, ...props }) => {

    // const inputClass = `form-control${error ? ' is-invalid' : 'is-vaild'}`

    return (
        < div className='mb-3' >
            <input
                className='form-control'
                {...props}
                onChange={onChange}
            />
            <div className='invalid-feedback'>
                {errorMessage}
            </div>
        </div >
    )
}