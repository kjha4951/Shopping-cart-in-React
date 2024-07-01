import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';

const Productdetail = ({ cart, setcart }) => {
    const { id } = useParams()
    const [product, setproduct] = useState({})
    const [relatedproducts, setrelatedproduct] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)
        setproduct(filterProduct[0])
        const relatedproducts = items.filter((prod) => prod.category === filterProduct[0].category)
        setrelatedproduct(relatedproducts);
        // console.log("RelatedProduct = ",relatedproducts);

    }, [id, product.category]);
    const addtocart = (id, price, title, description, imgSrc) => {
        const obj = { id, price, title, description, imgSrc }

        setcart([...cart, obj])
        // console.log(cart);
        toast.success('your item is added!', {
            position: "top-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }

    return (

        <>
            <ToastContainer
                position="top-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt="" />
                </div>
                <div className='text-center'>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className='btn btn-primary mx-3'>{product.price} {" "} ₹</button>
                    <button
                        onClick={() => addtocart(product.id, product.price, product.title, product.description, product.imgSrc)}
                        className='btn btn-warning'>Add to cart</button>
                </div>
            </div>
            <h1 className='text-center'>Related Products</h1>
            <Product cart={cart} setcart={setcart} items={relatedproducts} />
        </>
    )
}

export default Productdetail