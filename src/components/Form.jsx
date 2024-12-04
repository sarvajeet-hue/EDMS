import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addData } from "../Slices/SliceData";

export const Form = ({setShow}) => {

    const {register , handleSubmit} = useForm()
    const [formData  , setFormData] = useState({})
    const dispatch = useDispatch()
   function onSubmitForm(data) {
        setFormData(data)
        setShow(false)
        dispatch(addData(data))
   }
    
  return <div className="flex w-[200px] flex-col sm:w-[300px] md:w-[500px] lg:w-[600px]  border-black border p-3">

    <p>Add a New Employee</p>
    <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col  gap-2">
        <div className="flex gap-6">
            <input className="border p-1"  type="text" {...register("FirstName")}  placeholder="FirstName"/>
            <input className="border p-1"  type="text" {...register("LastName")}  placeholder="LastName"/>
        </div>


        <input type="text" {...register("ImageUrl")} placeholder="ImageUrl(Optional)" className="border p-1" />

        <input type="email" {...register("Email")} placeholder="Email" className="border p-1" />
        <input type="text" {...register("Number")} placeholder="Number" className="border p-1" />
        <input type="text" {...register("Address")} placeholder="Address" className="border p-1" />
        <input type="date" {...register("DOB")} placeholder="Calender" className="border p-1" />


        <button>Submit</button>
        
    </form>
  </div>;
};
