import { React, useEffect, useState } from "react";
import './ItemsForSale.css';

export function ItemsForSale() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const Item = (props) => {
        return <div>
        <h1>{ props.obj.name }</h1>
        <p><strong>Description: </strong>{ props.obj.description }</p>
        <ul>
            <li>
               Operating System:  { props.obj.OS }
            </li>
            <li>
                Ram: { props.obj.ram } GB
            </li>
            <li>
                CPU: { props.obj.CPU }
            </li>
            </ul>
        <img src= { props.obj.picture } className="item-img" />
        <h3> $ { props.obj.price }</h3>
        </div>;
    }

//     const itemsMap = () => {
//       return items.map(
//         function(it){
//           return <Item obj={ it } key={ it.id }/>;
//         });
//     };


    const displayItems = (items.length > 0) ? itemsMap : emptyList;

    const emptyList = () => {
        return  <div>No items to show</div>;
      };

//     useEffect(() => {
//         fetch("Products.json")
//         .then(res => res.json())
//         .then(data => setItems(data));
//     }, [] )
//     return <><h1>Items Available:</h1>{ displayItems() }</>;
// };

// useEffect(() => {
//     total();
// }, [cart]);

// const total = () => {
//     let totalVal = 0;
//     for (let i=0; i < cart.length; i++) {
//         totalVal += cart[i].price;
//     }
//     setCartTotal(totalVal)
// };
  
// const addToCart = (it) => {
//       setCart([...cart, it]);
// };
  
// const removeFromCart = (it) => {
//     let hardCopy = [...cart];
//     hardCopy = hardCopy.filter((cartItem) => cartItem.id !== it.id);
//     setCart(hardCopy);
// };
  
// const displayItems = (items.length > 0) ? itemsMap : emptyList;

// const emptyList = () => {
//     return  <div>No items to show</div>;
//   };

// const displayItems = items.map((it) => (
//     <div key={it.id}>
//         {`${it.name}: $${it.price}`}
//         <input type="submit" value="add" onClick={() => addToCart(it)} />
//     </div>
// ));
  
//   const cartItems = cart.map((it) => (
//         <div key={it.id}>
//           {`${it.name}: $${it.price}`}
//           <input type="submit" value="remove" onClick={() => removeFromCart(it)} />

// return (
//     <div>
//         Store
//         <div>{displayItems}</div>
//         <div>Cart</div>
//         <div>{cartItems}</div>
//         <div>Total: ${cartTotal}</div>
//     </div></div>
// )
// )
}
