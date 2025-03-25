import PizzaImg1 from "/src/assets/images/pizza-1.png";
import PizzaImg2 from "/src/assets/images/pizza-2.png";
import PizzaImg3 from "/src/assets/images/pizza-3.png";
import PizzaImg4 from "/src/assets/images/pizza-4.png";

export default function PizzaSelector() {
  return (
    <section className="mt-8 grid grid-cols-4 w-1/4">
      <img
        className="w-20 h-20"
        src={PizzaImg1}
        alt="image-of-a-special-pizza"
      />
      <img
        className="w-20 h-20"
        src={PizzaImg2}
        alt="image-of-a-special-pizza"
      />
      <img
        className="w-20 h-20"
        src={PizzaImg3}
        alt="image-of-a-special-pizza"
      />
      <img
        className="w-20 h-20"
        src={PizzaImg4}
        alt="image-of-a-special-pizza"
      />
    </section>
  );
}
