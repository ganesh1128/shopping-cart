import React from 'react'

function Header(props) {
    return (
       <header className="row block center">
           <div>
               <a href="#/">
               <h1>Small Shopping Cart</h1>
               </a>
           </div>
           <div>
               <a href="#/cart">Cart</a>  <a href="#/signin">SignIn</a>
               

           </div>
       </header>
    )
}

export default Header
