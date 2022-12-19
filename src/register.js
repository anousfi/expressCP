import { useState } from "react";
import Infos from "./infosUser";
import axios from 'axios';
export const Reg=()=>{
    const [infos,setInfos]=useState(new Infos("","","","","",""))
    return (
        <div>
            <input type="text" placeholder="Last name" onChange={(e)=>setInfos({...infos,Lname:e.target.value})}/>
            <input type="text" placeholder="First name" onChange={(e)=>setInfos({...infos,Fname:e.target.value})}/>
            <input type="text" placeholder="Your email" onChange={(e)=>setInfos({...infos,email:e.target.value})}/>
            <input type="text" placeholder="Choose your username" onChange={(e)=>setInfos({...infos,username:e.target.value})}/>
            <input type="password" placeholder="Choose a password" onChange={(e)=>setInfos({...infos,password:e.target.value})}/>
            <button onClick={()=>axios.
            post('http://localhost:9000/users/signup',infos)
            .then(res=>{
                return res.data
            })
            .catch(err=>{
                return err.data.message
            })}>Submit</button>
        </div>
    )
}