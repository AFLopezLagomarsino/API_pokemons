import './App.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home"
import Form from "./components/Form/Form"
import Detail from "./components/Detail/Detail"
import Error404 from "./components/Error404/Error404" 
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/pokemon" element={<Form/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
