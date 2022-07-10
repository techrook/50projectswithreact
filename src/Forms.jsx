import React from 'react'
import "./App.css"


const Form = (props) => {
    return (
    <form className='flex items-stretch flex-col mt-6 '
     onSubmit={props.getWeather}>
    <input className='w-64 text-center self-center mt-4 '
    type='text'
    placeholder='city'
    name='city'
    />
    <input className='w-64 text-center self-center mt-4  '
    type='text'
    placeholder='country'
    name='country'
    />
    <button className='bg-red-400 w-24 self-center mt-4 '>Submit</button>
    </form>
    )
    }
    export default Form;