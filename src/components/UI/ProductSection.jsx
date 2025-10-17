import React from "react";
import Card from "./Card";
import burgerImage from "../../assets/burger.png";
import burgerImage2 from "../../assets/burger-chicken.png";
import burgerImage3 from "../../assets/burger-bacon.png";
import burgerImage4 from "../../assets/burger-t.png";
function Product() {
  return (
    <div className="my-28">
      <h1 className="text-center text-5xl font-bold mb-20 border-b-2 border-green-600/80 pb-4 mx-auto w-fit">
        Nos burgers
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
        <Card
          burgerImage={burgerImage}
          Name="Burger extra"
          ingredient="Boeuf"
          ingredient1="Cheddar"
          ingredient2="Bacon"
          ingredient3="Sauce maison"
        />
        <Card
          burgerImage={burgerImage2}
          Name="Burger chicken"
          ingredient="Poulet"
          ingredient1="Cheddar"
          ingredient2="Tomate"
          ingredient3="Sauce maison"
        />
        <Card
          burgerImage={burgerImage3}
          Name="Burger bacon"
          ingredient="Boeuf"
          ingredient1="Cheddar"
          ingredient2="Bacon"
          ingredient3="Sauce maison"
        />
        <Card
          burgerImage={burgerImage4}
          Name="Burger bacon"
          ingredient="Boeuf"
          ingredient1="Cheddar"
          ingredient2="Oignon"
          ingredient3="Sauce maison"
        />
      </div>
    </div>
  );
}

export default Product;
