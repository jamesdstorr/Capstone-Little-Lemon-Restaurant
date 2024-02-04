import Button from "../../common/Button";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroContent}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.{" "}
        </p>
        <Button>Reserve a Table</Button>
      </div>
      <img />
    </div>
  );
};

export default Hero;