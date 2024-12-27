import { MealSelect } from "@/app/components/SelectMeal";
import { SelectDrinksContainer } from "@/app/components/ButtonToDrinks";

const Dish = () => {
    return (
        <>
            <div className="container">
                <MealSelect />
                <div className="dish_two">
                    <SelectDrinksContainer />
                </div>
            </div>
        </>
    );
};
export default Dish;
