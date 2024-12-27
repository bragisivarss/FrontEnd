"use client";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { useData } from "../utils/Context";
import { NextButton, PrevButton } from "./AmountButtons";
import { Drink } from "../types/ContextType";

export const SelectDrinks = () => {
    const {
        tempSelectedDrinks,
        setTempSelectedDrinks,
        order,
    } = useData();

    const fetchDrinks = useCallback(async () => {
        try {
            const { data } = await axios.get(
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer"
            );
            if (data.drinks) {
                const initialAmounts = Array(data.drinks.length).fill(0);

                const drinksWithAmounts = data.drinks.map(
                    (drink: Drink[], index: number) => ({
                        ...drink,
                        amount: initialAmounts[index],
                    })
                );
                setTempSelectedDrinks(drinksWithAmounts);
            }
        } catch (err) {
            console.error("Error fetching drinks:", err);
        }
    }, [setTempSelectedDrinks]);

    useEffect(() => {
        if (order) {
            setTempSelectedDrinks(order.drinks);
        } else {
            fetchDrinks();
        }
    }, [fetchDrinks, order, setTempSelectedDrinks]);

    const handleIncrement = (index: number) => {
        setTempSelectedDrinks((prevDrinks: Drink[]) => {
            const updatedDrinks = [...prevDrinks];
            updatedDrinks[index] = {
                ...updatedDrinks[index],
                amount: updatedDrinks[index].amount + 1,
            };
            return updatedDrinks;
        });
    };

    const handleDecrement = (index: number) => {
        setTempSelectedDrinks((prevDrinks: Drink[]) => {
            const updatedDrinks = [...prevDrinks];
            if (updatedDrinks[index].amount > 0) {
                updatedDrinks[index] = {
                    ...updatedDrinks[index],
                    amount: updatedDrinks[index].amount - 1,
                };
            }
            return updatedDrinks;
        });
    };

    if (!tempSelectedDrinks) {
        return <div className="loader"></div>;
    }

    return (
        <>
            <div className="drinks_wrapper">
                <div className="drinks_container">
                    {tempSelectedDrinks.map((drink: Drink, index: number) => (
                        <div key={index} className="single_drink">
                            <div className="drink_image_container">
                                <p className="drink_preview_name">
                                    {drink.strDrink}
                                </p>
                                <Image
                                    className="drink_image"
                                    src={drink.strDrinkThumb}
                                    alt={drink.strDrink}
                                    width={180}
                                    height={190}
                                />
                                <div className="counter">
                                    <div
                                        className="none"
                                        onClick={() => handleDecrement(index)}
                                    >
                                        <PrevButton />
                                    </div>
                                    <p className="amount">{drink.amount}</p>
                                    <div
                                        className="none"
                                        onClick={() => handleIncrement(index)}
                                    >
                                        <NextButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
