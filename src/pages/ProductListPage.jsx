import { useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useState(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data)=>setProducts(data))
    .catch((error)=> console.log(error));
    
  },[])

  ;


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product)=>{
        return(
          <div key={product.id}className="list">
            <img className="imagen" src={product.image}alt={`${product.images}image`}/>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
          </div>
        )
      })}


    </div>
  );
}

export default ProductListPage;
