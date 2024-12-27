"use client";

import { useEffect } from "react";
import { NextBtn, PrevBtn } from "./NextPrevBtn";
import { useData } from "../utils/Context";

export const Number = () => {
    const { people, setPeople, order } = useData();

    useEffect(() => {
        if (order) {
            setPeople(order.people);
        } else {
            setPeople(0);
        }
    }, [setPeople, order]);

    const handleClick = (increment: boolean) => {
        setPeople((prevNum) => {
            if (prevNum === 0 && !increment) {
                return 0;
            } else if (prevNum === 10 && increment) {
                return 10;
            } else {
                return increment
                    ? Math.min(prevNum + 1, 10)
                    : Math.max(prevNum - 1, 0);
            }
        });
    };

    return (
        <>
            <p className="counter_title">How many people will joining you?</p>
            <div className="buttons">
                <PrevBtn
                    className="embla_button embla_button-prev inline"
                    onClick={() => handleClick(false)}
                />
                <p className="number">{people ? people : 0}</p>
                <NextBtn
                    className="embla_button embla_button-next inline"
                    onClick={() => handleClick(true)}
                />
            </div>
        </>
    );
};
