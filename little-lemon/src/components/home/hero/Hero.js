import Button from "../../common/Button";
import style from "./Hero.module.css";


const Hero = () => {

  const onClickHandler = () => {
    
  }

  return (
    <div className={style.hero}>
      <div className={style.heroContent}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.{" "}
        </p>
        <Button onlClick={onClickHandler}>Reserve a Table</Button>
      </div>
      <img src="/images/restauranfood.jpg" alt="" className={style.hero_image}/>
    </div>
  );
};

export default Hero;
