import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import './ProductDetails.css'

const ProductDetails = () => { const { id } = useParams(); const { products } = useContext(ProductContext);

const product = products.find((item) => item.id === parseInt(id));

if (!product) { return <p>Product not found.</p>; }

return ( <div className="product-details"> <img src={product.image} alt={product.title} /> <h2>{product.title}</h2> <p>{product.description}</p> <p>Price: ${product.price}</p> </div> ); };

export default ProductDetails;