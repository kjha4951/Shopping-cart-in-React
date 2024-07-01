import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';



const Searchitem = ({cart,setcart}) => {
  const { term } = useParams();

const[filterdata,setfilterdata]=useState([])


useEffect(()=>{
    const filtereddata =()=>{
        const data =items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
        setfilterdata(data)
        // console.log(data);
    }
    filtereddata();

},[term])

  return (
    <Product cart={cart} setcart={setcart} items={filterdata} />
)
}

export default Searchitem