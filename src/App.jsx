import './App.css'
import Browse from './Browse/Browse';
import Category from './Category/Category';
import Movies from './Movies/Movies';
import Register from './Registration/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/category' element={<Category />} />
        <Route path='/home' element={<Browse />} />
        <Route path='/browse' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App