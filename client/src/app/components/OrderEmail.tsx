"use client";
import axios from "axios";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { useData } from "../utils/Context";

export const Email = () => {
    const router = useRouter();
    const {
        email,
        setEmail,
        people,
        selectedDateTime,
        selectedMeal,
        selectedDrinks,
        order,
        setOrder,
        setOrderFinnished,
        showWarning,
    } = useData();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedMeal) {
            toast.warn("Please create a order");
            router.push("/");
            return;
        }
        if (!showWarning) {
            toast.warn("Please select a date and time in the future");
            return;
        }
        if (!email) {
           toast.warn("Please enter an email");
            return;
        }
        if (people < 1) {
            toast.warn("Please select how many people are coming");
            return;
        }

        const totalDrinkPrice = selectedDrinks.reduce(
            (sum, drink) => sum + drink.amount * 1000,
            0
        );
        const price = people * Number(selectedMeal.price) + totalDrinkPrice;
        console.log("Selected Meal Price:", Number(selectedMeal.price));
        console.log("Number of People:", people);
        console.log("Selected Drinks:", selectedDrinks);

        console.log(price);

        const newOrder = {
            price: price,
            email,
            people,
            date: selectedDateTime?.toISOString(),
            dish: {
                idMeal: selectedMeal.idMeal,
                strCategory: selectedMeal.strCategory,
                strArea: selectedMeal.strArea,
                strMealThumb: selectedMeal.strMealThumb,
                strIngredient1: selectedMeal.strIngredient1,
                strIngredient2: selectedMeal.strIngredient2,
                strIngredient3: selectedMeal.strIngredient3,
                strIngredient4: selectedMeal.strIngredient4,
                strIngredient5: selectedMeal.strIngredient5,
                strIngredient6: selectedMeal.strIngredient6,
                strIngredient7: selectedMeal.strIngredient7,
                strIngredient8: selectedMeal.strIngredient8,
                strIngredient9: selectedMeal.strIngredient9,
                strIngredient10: selectedMeal.strIngredient10,
                strIngredient11: selectedMeal.strIngredient11,
                strIngredient12: selectedMeal.strIngredient12,
                strIngredient13: selectedMeal.strIngredient13,
                strIngredient14: selectedMeal.strIngredient14,
                strIngredient15: selectedMeal.strIngredient15,
                strIngredient16: selectedMeal.strIngredient16,
                strIngredient17: selectedMeal.strIngredient17,
                strIngredient18: selectedMeal.strIngredient18,
                strIngredient19: selectedMeal.strIngredient19,
                strIngredient20: selectedMeal.strIngredient20,
            },
            drinks: selectedDrinks.map((drink) => ({
                idDrink: drink.idDrink,
                strDrink: drink.strDrink,
                strCategory: drink.strCategory,
                strDrinkThumb: drink.strDrinkThumb,
                strGlass: drink.strGlass,
                amount: drink.amount,
            })),
        };

        if (order) {
            axios
                .put("https://localhost:7241/api/update-order", newOrder)
                .then(() => {
                    router.push("/order/receipt");
                    toast.success("Order Updated Successfully!");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                });
        } else {
            axios
                .post("https://localhost:7241/api/create-order", newOrder)
                .then(() => {
                    router.push("/order/receipt");
                    toast.success("Order Created Successfully!");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                });
        }
        setOrderFinnished(newOrder);
        setOrder(null);
        console.log(selectedMeal);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    name="email"
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                />
                <button className="btn_complete_order" type="submit">
                    {order ? "Update Order" : "Complete order"}
                </button>
            </form>
        </>
    );
};
