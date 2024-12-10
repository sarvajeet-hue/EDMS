import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Employer = () => {

    const {employeeData , currentData } = useSelector((state) => state.EmployeeReducer)
    console.log("currentdata:", currentData)

    useEffect(() => {
        
    })
    

    return (
        <div className="w-[50%] h-full border-r-2 border-black text-center">
             Details


            {
                currentData.map((data , index) => {
                    return (
                        <div className='flex flex-col items-center justify-center gap-3' key={index}>
                            <img className='rounded-full object-cover w-[200px] h-[200px]' src={data.ImageUrl} alt="" />
                            <p>{data.FirstName}</p>
                            <p>{data.LastName}</p>
                            <p>{data.Address}</p>
                            <p>{data.DOB}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
