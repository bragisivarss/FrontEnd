"use client";

import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import { useEffect, useState } from "react";
import axios from "axios";
import { SelectDish } from "../utils/router";
import { useData } from "../utils/Context";

type MealType = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

type MealResponse = {
    meals: MealType[];
};

export const Carousel = () => {
    const {isLoading, setIsLoading} = useData();
    const [data, setData] = useState<MealResponse[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        loop: true,
        dragFree: true,
    });

    useEffect(() => {
        const MealNames = [
            "Thai_Green_Curry",
            "Strawberries_Romanoff",
            "Lamb_and_Lemon_Souvlaki",
        ];

        const fetchData = async () => {
            const results = [];
            for (let i = 0; i < 3; i++) {
                try {
                    const response = await axios.get(
                        `https://www.themealdb.com/api/json/v1/1/search.php?s=${MealNames[i]}`
                    );
                    results.push(response.data);
                } catch (error) {
                    console.error(`Error fetching data from api${i}`, error);
                }
            }
            setData(results);
            setIsLoading(false);
        };

        fetchData();
    }, [setIsLoading]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    if(isLoading){
       return <div className="loading"> 
        <div className="loader"></div>
        </div>
    }

    return (
        <div className="embla">
                    <div className="embla_viewport" ref={emblaRef}>
                        <div className="embla_container">
                            {data.map((item, index) => (
                                <div key={index} className="embla_slide">
                                    <p className="carousel_meal">
                                        {item.meals[0].strMeal}
                                    </p>
                                    {item.meals && item.meals.length > 0 && (
                                        <>
                                            <Image
                                                className="carousel_img"
                                                src={item.meals[0].strMealThumb}
                                                alt={item.meals[0].strMeal}
                                                width={320}
                                                height={215}
                                            />
                                            <SelectDish
                                                dishName={item.meals[0].strMeal}
                                            />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="embla_controls">
                        <div className="embla_buttons">
                            <PrevButton
                                onClick={onPrevButtonClick}
                                disabled={prevBtnDisabled}
                            />
                            <NextButton
                                onClick={onNextButtonClick}
                                disabled={nextBtnDisabled}
                            />
                        </div>
                        <div className="embla_dots">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={"embla_dot".concat(
                                        index === selectedIndex
                                            ? " embla_dot-selected"
                                            : ""
                                    )}
                                />
                            ))}
                        </div>
                    </div>
        </div>
    );
};
