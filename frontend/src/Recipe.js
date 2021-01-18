import styles from './Recipe.module.css';
import { useState } from 'react';
import React from 'react';




class Recipe3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {

     const recipeName = window.location.pathname;
     const path = 'http://localhost:3000/api' + recipeName;
console.log(path);

     fetch(path)
        .then(res => res.json())
        .then(data => this.setState({ ...data[0] }));
            //... is the spread operator; expands an iterable
            // have to index 0 for some reason

   }

   //change serving
     changeServings(increment){
       this.setState(state => (
         {servings: Math.max(this.state.servings + increment, 1)}
       ))
     }      
 
   //post rating
   postRating = () => {
   
   const ratingSelect = document.getElementById('select-rating');
   const rating = +(ratingSelect.options[ratingSelect.selectedIndex].value);
 
   const data = {
     id: this.state._id,
     rating: rating
   };
 
   fetch(URL, {
     method: 'POST',
     body: JSON.stringify(data)
   })
   .then(() => {
     this.state.ratings.push(rating);
     document.getElementById('rating').innerText = this.avgRatings(this.state.ratings);
   });
   
  
  }


  avgRatings = (ratings) => {

    let sum = 0;
    for ( var i in ratings){
      sum += +(ratings[i]);
    }
    return (sum / ratings.length).toFixed(2);
  }

  render() {
//ingredients
     let ingredients = [];
     if (this.state.ingredients){

       for(let item in this.state.ingredients){
          ingredients.push(
          <li> 
          {this.state.ingredients[item] * this.state.servings} {item}
          </li>)

       }
     }
//instructions
     let instructions = [];
     if (this.state.instructions){
       instructions = this.state.instructions.map(step => <li>{step}</li> );

     }

//avg rating
     let avg_rating = 0;
     if (this.state.ratings){
        for (let i=0; i < this.state.ratings.length; i++){
           avg_rating+=this.state.ratings[i];
      
        }
        avg_rating = avg_rating/this.state.ratings.length;
     }


    return (
       <div className={styles.main}>
         <h1 className = {styles.title}>{this.state.title} </h1>
         <div className = {styles.intro}>
            
            <div className={styles.info}>
               <p className= {styles.desc}> {this.state.desc}
               </p>
               <h4>Servings</h4>
               <div className={styles.buttons}>
                  <button className={styles.minus} onClick={()=>this.changeServings(-1)}> – </button>
                  <span className={styles.num_servings}>{this.state.servings}</span>
                  <button className={styles.plus}  onClick={()=>this.changeServings(+1)}> + </button>
               </div>
               <div id="ratings"><span id="rating">{(avg_rating.toFixed(2))}</span> ★</div>

               
                <div class="rating">
                  <label for="select-rating" id="rating-label">Rate Me!</label> <br/>
                  <select id="select-rating">
                    <option selected hidden disabled>Select Rating</option>
                    <option value="1">1 ★</option>
                    <option value="2">2 ★</option>
                    <option value="3">3 ★</option>
                    <option value="4">4 ★</option>
                    <option value="5">5 ★</option>
                  </select>
                  <button id="post-rating" onClick={() => this.postRating()}> Post Rating </button>
                  <button onClick={() => this.props.updateIngredients(this.state.ingredients, this.state.servings )}> Add to Cart </button>

                </div>
               
            </div>
            
           <img className={styles.food_img} src={ process.env.PUBLIC_URL + '/' + this.state.picture} ></img> 

         </div>
         
         <h3>Ingredients</h3>
         <ul className={styles.ingredients}>
           {ingredients} 
         </ul>
         
         <h3>Instructions</h3>
         <ol className={styles.instructions}>
           {instructions} 
         </ol>
         
      </div>
     


    );
  }
}



function Recipe2() {
   return (
   
      <div className={styles.main}>
         <h1 className = {styles.title}> </h1>
         <div className = {styles.intro}>
            
            <div className={styles.info}>
               <p className= {styles.desc}>
               </p>
               <h4>Servings</h4>
               <div className={styles.buttons}>
                  <button className={styles.minus}> – </button>
                  <span className={styles.num_servings}>1</span>
                  <button className={styles.plus}> + </button>
               </div>
               <div id="ratings"><span id="rating"></span> ★</div>

               
                <div class="rating">
                  <label for="select-rating" id="rating-label">Rate Me!</label> <br/>
                  <select id="select-rating">
                    <option selected hidden disabled>Select Rating</option>
                    <option value="1">1 ★</option>
                    <option value="2">2 ★</option>
                    <option value="3">3 ★</option>
                    <option value="4">4 ★</option>
                    <option value="5">5 ★</option>
                  </select>
                  <button id="post-rating">Post Rating</button>
                </div>
               
            </div>
            
           <div className={styles.food_img} > img</div> 
         </div>
         
         <h3>Ingredients</h3>
         <ul className={styles.ingredients}>
            
         </ul>
         
         <h3>Instructions</h3>
         <ol className={styles.instructions}>
            
         </ol>
         
      </div>
     
  
        ) 

}

export default Recipe3;
