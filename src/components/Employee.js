import React from 'react'
import EditEmployee from './EditEmployee'

const Employee = (props) => {
  return (
    <>
    <div class="m-2 py-8 px-8 max-w-[600px] max-h-[600px] space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
        <img class="object-fit rounded-full block mx-auto h-24 sm:mx-0 sm:shrink-0" src={props.img} alt="Woman's Face" />
        <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
                {props.name}
            </p>
            <p class="text-slate-500 font-medium">
                {props.role}
            </p>
            </div>
            <EditEmployee name={props.name} id={props.id} role={props.role} updateEmployee ={props.updateEmployee}/>
        </div>
</div>
    </>
  )
}

export default Employee