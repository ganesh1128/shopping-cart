import React from 'react'
import Product from './Product.js';

function Main(props) {
    const {products,onAdd,Disab} = props;
    
    return (
       <main className="block col-2">
           <h2>Products</h2>
           <div className='row'>
           {products.map((product) => (
               <Product key={product} product={product} onAdd={onAdd} disabledState={Disab}></Product>
           ))}
           </div>
       </main>
    )
}

export default Main
