import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeData, showCurrentData } from "../Slices/SliceData";


export const EmployerList = () => {
    const dispatch = useDispatch()

    
    
    
    const {employeeData} = useSelector((state) => state.EmployeeReducer)
    function filterationHandle(data){
        // let data = employeeData.filter((_ ,item) => {
            
        //     return item === index

        // })
        // console.log("data:", data) 
        dispatch(showCurrentData(data))
        
    }
    
    return (
        <div className="text-center w-[50%] h-full border-r-2 border-black" >
            EmployeeList
            <div>
                {
                    employeeData.map((data , index) => {
                        return (
                            <div className="flex items-center justify-center gap-3" key={index}>
                                <p onClick={() => filterationHandle(data)}>{data.FirstName}</p>
                                <button className="border rounded-lg p-2" onClick={() => dispatch(removeData(index))}>X</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}