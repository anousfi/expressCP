import { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import {UserTasks,AddTask,RemoveTask} from './redux/reducer/reducer';
import { useNavigate } from "react-router-dom";

const Main=()=>{
    

    const location=useLocation()

    const state=location.state

    const navigate=useNavigate()

    const dispatch=useDispatch()

    const Mainuser=localStorage.getItem('user')

    const id=JSON.parse(Mainuser)._id

    const endSession=()=>{
      localStorage.clear()
      navigate('/')
    }

    useEffect(()=>{
              dispatch(UserTasks(Mainuser))
                  },[])

    

    const todolist=useSelector(state=>state.Tasks.list)


    const [text,setText]=useState("")

    return (
      <div>
        <button onClick={()=>endSession()}>log out</button>
        <input type="text" placeholder='task' onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>dispatch(AddTask({todo:text,id:id}))}>add</button>
        <div>
          {todolist.map(item=>
             <div>
              <p>{item.todo}</p>
              <button onClick={()=>dispatch(RemoveTask({todo:item.todo,id:id}))}>remove</button>
              </div>
                       )}
        </div>
      </div>
    )

}
export default Main;