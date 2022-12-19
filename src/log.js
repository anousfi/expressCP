import { useState} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {ConnectUser} from './redux/reducer/reducer1';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export const Log=()=>{
    const [login,setLogin]=useState({user:"",password:""})
    const dispatch=useDispatch()
    const connectedUser=useSelector(state=>state.Users.user)
    const navigate =useNavigate()
    const verify =(obj)=>{
        typeof(dispatch(ConnectUser(obj)))==='object'?
            navigate('/main'):navigate('/')
    }
    return (
        <div>
            <input type="text" placeholder="Enter your user id" onChange={(e)=>setLogin({...login,user:e.target.value})}/>
            <input type="password" placeholder="Enter your password" onChange={(e)=>setLogin({...login,password:e.target.value})}/>
            <button onClick={()=>verify(login)}>
               sign in
            </button>
            
        </div>
    )
}