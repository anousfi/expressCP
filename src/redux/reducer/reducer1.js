import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const Myusers=createAsyncThunk('/users/myusers',async()=>{
    return axios.
    get('http://localhost:9000/users')
    .then(res=>{
        return res.data
    })
    .catch(err=>{
       return  err.data.message
    })
})
export const ConnectUser=createAsyncThunk("/users/signin",async (user)=>{
    return axios
    .post('http://localhost:9000/users/signin',user)
    .then(res=>{
       return res.data
    })
    .catch(err=>{
       return err.data.message
    }) 
})

const UsersReducer=createSlice({
    name:"Users",
    initialState:{
        user:{
            lastname: '',
            firstname: '',
            email: '',
            username: '',
            password: '',
            connections:0
        },
        status:'',
        error:''
    },
    reducers:{},
    extraReducers:{
        [ConnectUser.fulfilled]:(state,action)=>{
            if (typeof(action.payload)==='object') {
                state.user=action.payload
                localStorage.setItem('user',JSON.stringify(action.payload))
                state.status='Connected with success!!'
            } else {
                state.error=action.payload
                state.status='failed to connect!!'
            }
        },
        [ConnectUser.rejected]:(state,action)=>{
            state.status='request rejected!!!'
            state.error=action.payload
        },
        [ConnectUser.pending]:(state)=>{
            state.status='loading....'
        }
    }
})

export default UsersReducer.reducer