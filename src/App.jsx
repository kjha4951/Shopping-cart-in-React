import { useState } from 'react'
import './App.css'
import {items} from './Components/Data'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Productdetail from './Components/Productdetail'
import Searchitem from './Components/Searchitem'
import Card from './Components/Card'
function App() {
  const [data, setdata] = useState([...items])
  const[cart,setcart]=useState([])

  return (
    <>
      <Router>
      <Navbar cart={cart} setdata={setdata}/>
      <Routes>
        <Route path='/' element={<Product cart={cart} setcart={setcart} items={data}/>}/>
        <Route path='/product/:id' element={<Productdetail cart={cart} setcart={setcart}/>}/>
        <Route path='/search/:term' element={<Searchitem cart={cart} setcart={setcart}/>}/>
        <Route path='/cart' element={<Card cart={cart} setcart={setcart}/>}/>

      </Routes>
      </Router> 
    </>
  )
}

export default App
