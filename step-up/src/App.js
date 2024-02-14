import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './Pages/Home/index';
import About from './Pages/About/index';




function App() {
  return (
   <div>
    <BrowserRouter>
       <Header />
       <Routes>
         <Route exact={true} path="/" element={<Home/>}/>
         <Route exact={true} path="/about" element={<About/>}/>
       </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
