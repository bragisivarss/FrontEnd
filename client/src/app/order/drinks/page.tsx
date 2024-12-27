import { ButtonToOrder } from "@/app/components/ButtonToOrder";
import { DrinkPrice } from "@/app/components/DrinkPricing";
import { SelectDrinks } from "@/app/components/DrinksContainer";


const Drinks = () => {
    return (
        <div className="container_two">
            <div className="drink_one">
                <SelectDrinks />
            </div>
            <div className="drink_two">
                <ButtonToOrder />
                <DrinkPrice />
            </div>
        </div>
    );
};
export default Drinks;
