import React from 'react'

export default function Product(props) {
    const {product,onAdd,cartItems} = props;
    console.log(cartItems)
    // const [disable, setDisable] = React.useState(false);
    // setDisable(true);
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>Rs.{product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}  >Add To Cart</button>
            </div>
        </div>
    )
}
