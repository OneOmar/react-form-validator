import React from 'react'

export const PasswordInput = ({ type, onChange, showPassword, togglePassword, errorMessage, ...props }) => {

    return (
        < div className='input-group mb-3' >
            <input
                type={showPassword ? 'text' : 'password'}
                className='form-control'
                {...props}
                onChange={onChange}
            />
            <span className='input-group-text' onClick={togglePassword}>
                {showPassword ? <i className='bi bi-eye'></i> : <i className='bi bi-eye-slash'></i>}
            </span>
            <div className='invalid-feedback'>
                {errorMessage}
            </div>
        </div >
    )
}
