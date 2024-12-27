"use client";
import { toast } from "react-toastify";
import { useData } from "../utils/Context";
import { useRouter } from "next/navigation";

export const MealMap = () => {
    const { selectedMeal, orderFinnished } = useData();
    const router = useRouter();

    if (!selectedMeal) {
        toast.warn("You need to place an order first!");
        router.push("/");
        return;
    }

    return (
        <div className="receipt_meal">
            <div className="ordered_meal">
                <p className="selected_meal_order">
                    Selected Meal{" "}
                    <span className="block receipt">
                        {selectedMeal.strMeal}
                    </span>
                </p>
            </div>

            <div className="meal_origin">
                <p className="selected_meal_order">
                    Meal Origin{" "}
                    <span className="block receipt">
                        {selectedMeal.strArea}
                    </span>
                </p>
            </div>

            <div className="meal_category">
                <p className="selected_meal_order">
                    Meal Category{" "}
                    <span className="block receipt">
                        {selectedMeal.strCategory}
                    </span>
                </p>
            </div>
        </div>
    );
};
