import React from 'react'
import Button from './Button'
import InputField from './InputField'
import './LoginBox.css'

export default function LoginBox() {
  return (
    <div>
        <div className='box'>
            <InputField label={'Full Name'} type={'text'}/>
            <InputField label={'Email'} type={'email'}/>
            <InputField label={'Mobile No'} type={'number'}/>
            <InputField label={'Address'} type={'text'}/>
            <Button/>
        </div>
    </div>
    
  )
}
