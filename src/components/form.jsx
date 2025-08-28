import { Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const {handleSubmit, register, reset} = useForm();
    const submit = (data) =>{
    

            reset()
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack>
          
            <TextField label="Ism" type='name' {...register(ism)} placeholder='Ism'/>
         
      </Stack>
    </form>
  )
}
