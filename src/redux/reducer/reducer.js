import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const UserTasks=createAsyncThunk('/tasks?user',async ({user})=>{
    return axios.
    get(`http://localhost:9000/tasks/${user}`)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err.message
    })
})

export const AddTask=createAsyncThunk('tasks/AddTask',async ({todo,id})=>{
    return axios.
    post(`http://localhost:9000/tasks/${id}`,{task : todo})
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err.data.message
    })
})

export const RemoveTask=createAsyncThunk('tasks/RemoveTask',async ({todo,id})=>{
    return axios.
    delete(`http://localhost:9000/tasks/${id}/delete/${todo}`)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err.data.message
    })
})

const Myreducer=createSlice({
name:"Tasks",
initialState:{
    list:[],
    status:'',
    erreur:'',
},
reducers:{},

extraReducers:{
    [UserTasks.fulfilled]:(state,action)=>{
        state.list=action.payload
        state.status='loaded with success!!'
    },
    [UserTasks.rejected]:(state,action)=>{
        state.status='failed to load!!!'
        state.erreur=action.payload
    },
    [UserTasks.pending]:(state)=>{
        state.status='loading....'
    },
    [AddTask.fulfilled]:(state,action)=>{
        state.status='loaded with success!!'
        state.list=[...state.list,action.payload]
        console.log(state.list)

    },
    [AddTask.rejected]:(state,action)=>{
        state.status='failed to load!!!'
        state.erreur=action.payload
    },
    [AddTask.pending]:(state)=>{
        state.status='loading...'
    },
    [RemoveTask.fulfilled]:(state,action)=>{
        state.status='loaded with success!!'
        console.log(action.payload)
        state.list=[...state.list.filter(element=>(element.todo!==action.payload.todo))]

    },
    [RemoveTask.rejected]:(state,action)=>{
        state.status='failed to load!!!'
        state.erreur=action.payload
    },
    [RemoveTask.pending]:(state)=>{
        state.status='loading...'
    }
}
})

export default Myreducer.reducer

