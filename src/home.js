import {useEffect,useState} from 'react';
import { Reg } from './register';
import { Log } from './log';
const Home =()=>{  
  const [sl1,setSl1]=useState(false)
  const [sl2,setSl2]=useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>setSl1(!sl1)}>Login</button>
        {
          sl1 && (
            <div >
          <Log/>
        </div>
          )
        }
        
        <button href="" onClick={()=>setSl2(!sl2)}>Register</button>
        <div className={sl2?'show1':'show'}>
          <Reg/>
        </div>
      </header>
    </div>
  );

}
export default Home;