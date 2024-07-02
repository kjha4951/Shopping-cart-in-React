import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = ({items , cart , setcart}) => {
    const addtocart=(id,price,title,description,imgSrc)=>{
        const obj={id,price,title,description,imgSrc}
        
        setcart([...cart,obj])
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


    // console.log(items);
    return (
        
        <div>
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
theme="dark"/>
            <div className="container my-5">
                <div className="row">
                    {
                        items.map((product) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 my-3 text-center"  key={product.id}>
                                    <div className="card" style={{ width: "300px" , height:"510px" }}>
                                        <Link to={`/product/${product.id}`} style={{
                                            display:"flex", 
                                            justifyContent:"center",
                                            alignItems:"center",
                                            }}>
                                        <img src={product.imgSrc} className="card-img-top " alt={product.category} />

                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                             <button className='btn btn-primary mx-3'>{product.price} {" "} ₹</button>
                                             <button 
                                             onClick={()=>addtocart(product.id,product.price,product.title,product.description,product.imgSrc)}
                                             className='btn btn-warning'>Add to cart</button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product