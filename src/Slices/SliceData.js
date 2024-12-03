import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    employeeData : []
}

export const slice = createSlice({
    name : 'EmployeeData',
    initialState,
    reducers : {
        addData : (state , action) => {state.employeeData.push(action.payload)}
        
    }
})

console.log("slice.reducer", slice.reducer)

export const {addData} = slice.actions
export default slice.reducer