import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    employeeData: JSON.parse(localStorage.getItem("employeeData")) || [],
    currentData : []
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
            localStorage.setItem("employeeData" , JSON.stringify(state.employeeData))
        }, 
        showCurrentData : (state , action) => {
            state.currentData.push(action.payload)
        }
        
    }
})


 
export const {addData , removeData , showCurrentData} = slice.actions
export default slice.reducer