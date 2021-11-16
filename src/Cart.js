import React from "react";
import { useCart } from "react-use-cart";

const Cart = () =>{
  const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">your Cart is Empty</h1>
  return(
      <section className="container">
      <div className="row justify-content-center">

        <div className="col-12">
            <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>

            <table className="table table-light table table-hover m-0">
                <tbody>
                {items.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td>
                            <img src={item.img} style={{height: '6rem', width: '6rem'}}/>
                        </td>
                        <td>{item.item}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                            <button className="btn btn-info ms-2" onClick={ () => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                            <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>Remove Item</button>
                            <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
      
        <div className="col-auto ms-auto">
          <h3>Total Price : $ {cartTotal} </h3>
        </div>
            <div className="col-auto ms-auto">
            <button className="btn btn-danger ms-2" onClick={() => emptyCart()}> Clear</button>
            </div>
        </div>
      </section>
  );
};

export default Cart;

