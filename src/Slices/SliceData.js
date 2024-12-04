import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    employeeData: JSON.parse(localStorage.getItem("employeeData")) || [],
    currentData : JSON.parse(localStorage.getItem("currentData")) || [],
}

export const slice = createSlice({
    name : 'EmployeeData',
    initialState,
    reducers : {
        addData : (state , action) => {
            state.employeeData.push(action.payload)
            
            localStorage.setItem("employeeData" , JSON.stringify(state.employeeData))
        },
        removeData : (state , action) => {
            state.employeeData = state.employeeData.filter((_,index) => index !== action.payload )
            state.currentData = [action.payload]
            localStorage.setItem("currentData" , JSON.stringify(state.currentData))
            localStorage.setItem("employeeData" , JSON.stringify(state.employeeData))
        }, 
        showCurrentData : (state , action) => {
            state.currentData = [action.payload]
            localStorage.setItem("currentData" , JSON.stringify(state.employeeData))
            
        }
        
    }
})


 
export const {addData , removeData , showCurrentData} = slice.actions
export default slice.reducer