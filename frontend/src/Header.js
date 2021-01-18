import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <   header >
      <h1 className={styles.top}>~Grocery Prep~</h1>
      <nav>
         <Link className={styles.top} to="/" >Home</Link>

         <Link className={styles.top} id= "about" to = "/about">About the Chef</Link>
      </nav>
    </header>
  );
}

export default Header;
