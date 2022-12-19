import logo from './logo.svg';
import './App.css';
import Home from './home';
import Main from './main';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
