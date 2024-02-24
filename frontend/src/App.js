import Homepage from './components/home-page/home-page';
import Signup from './components/sign-up/sign-up';
import Cart from "./components/cart/cart";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/sign-up" element={<Signup/>}></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
