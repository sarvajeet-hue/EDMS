import { combineReducers } from "@reduxjs/toolkit";
import EmployeeReducer from '../Slices/SliceData'

export const rootReducers = combineReducers({
    EmployeeReducer : EmployeeReducer
})