import Button from "../../common/Button";
import SpecialsCard from "../../common/SpecialsCard";
import style from "./Specials.module.css";

const Specials = () => {
  return (
    <div className={style.specials}>
      <div className={style.specials_content}>
        <div className={style.specials_title}>
          <h1>This Week's Specials</h1>
          <Button>Online Menu</Button>
        </div>
        <div className={style.specialItems}>
          <SpecialsCard
            image="/images/greek salad.jpg"
            title="Greek Salad"
            price="£10"
            description="The famouse Greek salad of crispy lettuce,
                         peppers, olives and our Chicago style feta cheese, 
                         garnished with crunchy garlic and rosemary croutons. "
          />
          <SpecialsCard
            image="/images/bruchetta.png"
            title="Bruchetta"
            price="£11.50"
            description="Our Bruchetta is made from grilled bread that has been smeared with garlic and 
                        seasoned with salt and olive."
          />
          <SpecialsCard
            image="/images/lemon dessert.jpg"
            title="Lemon Dessert"
            price="£8"
            description="This comes straight from Grandma's recipe book, every last ingrediant has been sourced and 
                        is as authentic as can be imagined."
          />
        </div>
      </div>
    </div>
  );
};

export default Specials;
