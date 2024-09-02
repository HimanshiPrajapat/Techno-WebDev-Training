// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';

// const ProductCardList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // State to manage errors

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok'); // Handle non-200 responses
//         }
//         return response.json();
//       })
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching data: ", error);
//         setError(error.message); // Set the error state
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="product-card-list">
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p> // Display error message if there's an error
//       ) : (
//         products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))
//       )}
//     </div>
//   );
// };

// export default ProductCardList;

  
//   // useEffect(() => {
//   //   fetch('https://fakestoreapi.com/products')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       setProducts(data);
//   //       setLoading(false);
//   //     })
//   //     .catch(error => {
//   //       console.error("Error fetching data: ", error);
//   //       setLoading(false);
//   //     });
//   // }, []);

//   // return (
//   //   <div className="product-card-list">
//   //     {loading ? (
//   //       <p>Loading...</p>
//   //     ) : (
//   //       products.map(product => (
//   //         <ProductCard key={product.id} product={product} />
//   //       ))
//   //     )}
//   //   </div>
//   // );
// // };

// // export default ProductCardList;

// using context api and router

import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import ProductCard from './ProductCard';

const ProductCardList = () => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-card-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
