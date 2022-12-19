import TasksReducer from '../reducer/reducer'
import UsersReducer from '../reducer/reducer1'
import { configureStore } from "@reduxjs/toolkit";
const Mystore=configureStore({
    reducer:{
        Tasks:TasksReducer,
        Users:UsersReducer
    }
})
export default Mystore ;

