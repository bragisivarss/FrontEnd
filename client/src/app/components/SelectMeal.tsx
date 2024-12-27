"use client";
import { useEffect, useContext, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { DataContext } from "../utils/Context";

export const MealSelect = () => {
    const { tempSelectedMeal, setTempSelectedMeal, order} = useContext(DataContext);

    const fetchMeal = useCallback(async () => {
        try {
            const { data } = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/random.php"
            );
            setTempSelectedMeal(data.meals[0]);
        } catch (err) {
            console.error("Error fetching meal", err);
        }
    }, [setTempSelectedMeal]);

    useEffect(() => {
        if (order) {
            setTempSelectedMeal(order.dish);
        } else {
            fetchMeal();
        }
    }, [order, fetchMeal, setTempSelectedMeal]);

    if (!tempSelectedMeal) {
        return <div className="dish_img dish_one"><div className="loader"></div></div>;
    }

    const ingredients = Object.keys(tempSelectedMeal)
        .filter(
            (key) =>
                key.startsWith("strIngredient") &&
                tempSelectedMeal[key as keyof typeof tempSelectedMeal] &&
                tempSelectedMeal[key as keyof typeof tempSelectedMeal].trim() !== ""
        )
        .map((key) => tempSelectedMeal[key as keyof typeof tempSelectedMeal]);

    return (
        <div className="select_dish dish_one">
            <div className="dish_img">
                <Image
                    className="image"
                    src={tempSelectedMeal.strMealThumb}
                    alt={tempSelectedMeal.strMeal}
                    width={450}
                    height={400}
                />
                <div className="background">
                <p className="dish_name">{tempSelectedMeal.strMeal}</p>
                <p className="dish_price">Price: 3000Kr<span className="per_person">Per Person</span></p>
                <div className="dish_info">
                    <h3 className="ingredients">Ingredients</h3>
                    <ul>
                        {ingredients.map((item, index) => (
                            <li className="ingredient" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
            <div className="btn_new_dish">
                <button className="btn_generate_dish" onClick={fetchMeal}>Generate New Dish</button>
            </div>
        </div>
    );
};

