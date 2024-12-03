import { configureStore } from "@reduxjs/toolkit";

import { rootReducers } from "./reducers/reducers";


 export const store = configureStore(
    {
       reducer : rootReducers
       
    }
)




