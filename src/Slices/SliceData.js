import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    employeeData: JSON.parse(localStorage.getItem("employeeData")) || [],
    currentData: JSON.parse(localStorage.getItem("currentData")) || [],
}

export const slice = createSlice({
    name : 'EmployeeData',
    initialState,



    
    reducers : {
        addData : (state , action) => {
            state.employeeData.push(action.payload)
            state.currentData = [action.payload]
            
            localStorage.setItem("employeeData" , JSON.stringify(state.employeeData))
            localStorage.setItem("currentData", JSON.stringify(state.currentData));
        },
        removeData: (state, action) => {
            // Remove the specified item by index from employeeData
            state.employeeData = state.employeeData.filter((_, index) => index !== action.payload);
        
            // Update currentData to show the first item from the updated employeeData
            if (state.employeeData.length > 0) {
                state.currentData = [state.employeeData[0]]; // Set to the first employee data
            } else {
                state.currentData = []; // Clear if no employees are left
            }
        
            // Update localStorage
            localStorage.setItem("employeeData", JSON.stringify(state.employeeData));
            localStorage.setItem("currentData", JSON.stringify(state.currentData));
        }, 
            showCurrentData : (state , action) => {
                state.currentData = [action.payload]
                localStorage.setItem("currentData" , JSON.stringify(state.currentData))
                
            }
        
    }
})


 
export const {addData , removeData , showCurrentData} = slice.actions
export default slice.reducer