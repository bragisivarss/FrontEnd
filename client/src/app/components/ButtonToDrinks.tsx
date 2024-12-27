"use client";
import { useData } from "../utils/Context";
import { DrinkRouteWithSaveButton } from "../utils/router";

export const SelectDrinksContainer = () => {
    const { tempSelectedMeal } = useData();

    return (
        <div className="continue_container">
            <div className="next_step">
                {tempSelectedMeal && (
                    <p className="selected_meal">
                        Selected meal
                        <span className="selected_meal_name">
                            {tempSelectedMeal.strMeal}
                        </span>
                    </p>
                )}
                <p className="next_step_text">Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <DrinkRouteWithSaveButton />
            </div>
        </div>
    );
};
