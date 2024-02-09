import style from "./Nav.module.css";
import { Link } from 'react-router-dom';


const Nav = () => {



  return (
    <header>
      <nav class={style.Nav}>
        <img src="/images/Logo.png" alt="logo" class={style.Logo} />
        <ul class={style.NavLinks}>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
