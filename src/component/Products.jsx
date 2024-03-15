import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import { addcart } from "../redux/action/Index";
  
const Products = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  const dispatch=useDispatch();
  const addProduct=(product)=>{
    dispatch(addcart(product));
  }
  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await response.json());
      setloading(false);
      console.log(response);
    };
    getProduct();
  }, []);
  const Loading = () => {
   return(
    <>
    <div className="col-md-6">
        <Skeleton height={400}/>
      </div>
    <div className="col-md-6">
        <Skeleton height={50} width={300}/>
      </div>
    </>
   )
  };
  const ShowProduct = () => {
    const cartItems = useSelector((state) => state.HandleCart);

    // Check if the current product is in the cart
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    return(
      <>
      <div className="row">
  <div className="col-md-6">
    <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: "400px" }} />
  </div>
  <div className="col-md-6 py-5">
    <h4 className="text-uppercase text-black-50">
      {product.category}
    </h4>
    <h1 className="display-5">{product.title}</h1>
    <p className="lead fw-bolder">
      Rating {product.rating && product.rating.rate}
    </p>
    <h3 className="display-6 fw-bolder">$ {product.price}</h3>
    <p className="lead">{product.description}</p>
    <div className="d-flex flex-column flex-sm-row justify-content-center">
                {isProductInCart ? (
                    <button className="btn btn-dark px-4 py-2 mb-2 mb-sm-0 me-sm-2" disabled>Already in Cart</button>
                ) : (
                    <NavLink className="btn btn-dark px-4 py-2 mb-2 mb-sm-0 me-sm-2" onClick={() => addProduct(product)}>Add to Cart</NavLink>
                )}
                <NavLink to={'/cart'} className="btn btn-outline-dark px-4 py-2">Go to Cart</NavLink>
            </div>
  </div>
</div>

      </>
    )
  };
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Products;
