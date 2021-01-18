import pic from './images/me-and-gma.JPG';
import styles from './About.module.css';

function Profile(){
   return (

     <div>
         <h1 class = "title" >About the Chef</h1>
         <p>Hello there. I definitely wouldn't call myself a cook or claim
         any real skill within the kitchen, but I have at least learned enough
         throughout my life to sustain a somewhat healthly diet. </p>
         
         <p>That being said, I tried to just pick some recipes that would be easy to understand.</p>
         
         <h2>Life</h2>
         
         <p> I grew up paying some limited attention to my mother and grandma cook.
         I also attained skill in making random things that I like that weren't
         necessarily things my family would be making for household dinner.</p>
         
         <p>Anyway, now I have started to learn more recipes from my mom and auntie
         since we cook a lot more at home. I don't quite have all those meals
         quite down yet, so the page still consists of mediocre quasi recipes,
         if you could even call them that. Enjoy.</p>
       
            
            
        
            <p>view below: my grandma and me</p>
            
         <img  className={styles.about_pic} src={pic}></img>
         
      </div>

   )
}

export default Profile;
