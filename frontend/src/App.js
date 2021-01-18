import './App.css';
import Header from './Header.js';
import Cart from './Cart.js';
import Profile from './About.js';
import Home from './Home.js';
import Recipe from './Recipe.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useState} from 'react';
import React from 'react';

class App extends React.Component {


   constructor(props){
      super(props);
      this.state={ cart: [], ingredients: []}
   }
//have to pass this as a prop to Cart
emptyCart = () => {

   this.setState({cart : []});
   console.log("state updated");
}

updateIngredients = (ingredients, servings) => {
   let currents = this.state.ingredients;//Object
   for (let ing in ingredients){
      if (ing in currents){
         currents[ing] += ingredients[ing] * servings;//update an ing
      }else{
         currents[ing] = ingredients[ing] * servings;//add new ing
      }
   }
   this.updateCart(currents);

}


//updateCart (Array of ingredient Objects)
//does not update amounts for duplicates
updateCart = (ingredients) => {
  let newCart = []; 
   for(let item in ingredients){
          let num = ingredients[item];
          
          
          newCart.push(
          <li>
          {ingredients[item] } {item}
          </li>)
   };
/*
  ingredients.map(ing =>
      
      newCart.push(`${ingredients.ing} ${ing}`),
    //newCart.push(ing),
   );
*/   this.setState({cart: newCart})
}

render(){
return (
  <BrowserRouter>
    <div className="App">
      <Header/>
      <main>
  
      <Switch> 
        <Route exact path='/about'>
         <Profile />
        </Route>

        <Route path='/recipe'>
          <Recipe  updateIngredients={this.updateIngredients}/>
        </Route>

        <Route path='/'>
         <Home />
        </Route>


      </Switch>

         <Cart cart={this.state.cart} emptyCart={this.emptyCart}/>
      </main>

   </div>
  </BrowserRouter>
  );
  }
}

export default App;
