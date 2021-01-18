import styles from './Cart.module.css';


function Cart(props){
 
   let cart = [];
   cart = props.cart.map(item => <li>{item}</li> );

return (
      <div className={styles.main}>
         <h1 className={styles.title}>Cart</h1>

         <ul className={styles.ingredients}>
            {cart}
         </ul>
         <button onClick= {() => props.emptyCart()}>Empty Cart
         </button>

      </div>

   )
}

export default Cart;
