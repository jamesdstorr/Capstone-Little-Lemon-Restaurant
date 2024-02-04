import style from "./Nav.module.css";
import logo from "../../public/images/Logo.png";

const Nav = () => {
  return (
    <header>
      <nav class={style.Nav}>
        <img src={logo} alt="logo" class={style.Logo} />
        <ul class={style.NavLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
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
