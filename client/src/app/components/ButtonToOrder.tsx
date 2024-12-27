"use client";
import { OrderRouteWithSaveButton } from "../utils/router";
import { useData } from "../utils/Context";

export const ButtonToOrder = () => {
    const { tempSelectedDrinks } = useData();

    const filteredDrinks = tempSelectedDrinks.filter(
        (selectedDrinks) => selectedDrinks.amount > 0
    );

    const totalDrinkPrice = filteredDrinks.reduce(
        (sum, drink) => sum + drink.amount * 1000,
        0
    );

    return (
        <div className="continue_container">
            <div className="next_step">
                <p className="selected_drinks_title">Selected drinks</p>
                {filteredDrinks.length > 0 ? (
                    filteredDrinks.map((drink) => (
                        <p className="selected_drinks" key={drink.strDrink}>
                            {drink.strDrink}: {drink.amount}
                        </p>
                    ))
                ) : (
                    <p className="placeholder_text">No selected drinks</p>
                )}
                <p className="total_drink_price">Price: {totalDrinkPrice}kr.</p>
                <p className="drinks_continue">Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <OrderRouteWithSaveButton />
            </div>
        </div>
    );
};
