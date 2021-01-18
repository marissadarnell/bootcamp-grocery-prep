import style from './Home.module.css';
import styles from './Recipe.module.css';

import { Link } from 'react-router-dom';

import leaf from "./images/leaf.png";
import fish from './images/fish.png';

function Home(){
   return (
      <div className={style.main}>
         <h1 className={style.title} >This is the Grocery Prep Home Page</h1>
   
      <p className={style.left}>Find some "recipes" below, organized by skill level</p>
         
         <h2 className={style.left}>Recipes</h2>
         
            <h3>Very Low Effort</h3>
            
            <ul className={style.front_page}>
               <li>
                  <Link to = "/recipe/5fe52e08cd16708b1801f191">Milk Tea</Link>
                  <img src={leaf} className={style.diet}/>
               </li> 
               <li>
                  <Link to = "/recipe/5fe531d7cd16708b1801f192">Banana Toast</Link>
                  <img src ={leaf} className={style.diet}></img>
               </li>
            </ul>
            
            <h3>Low Effort</h3>

            <ul className={style.front_page}>
               <li>
                  <Link to= "/recipe/5fe533f2cd16708b1801f194">Breakfast Croissantwich</Link>
                  <img src ={leaf} className={style.diet}/>
               </li>
               <li>
                  <Link to= "/recipe/5fe53756cd16708b1801f196">French Toast</Link>
                  <img src ={leaf} className={style.diet}></img>
               </li> 
            </ul>
            
            <h3>Mezzo Efforte</h3>

            <ul className={style.front_page}>
               <li>
                  <Link to= "/recipe/5fe5392acd16708b1801f197">Tilapia</Link>
                  <img src={fish} className={style.fish}></img>
               </li> 
               <li>
                  <Link to= "/recipe/5fe53a13cd16708b1801f198">Spicy Tofu Soup</Link>
                  <img src ={leaf} className={style.diet}></img>
               </li>
            </ul>

      </div>

   )
}

export default Home;
