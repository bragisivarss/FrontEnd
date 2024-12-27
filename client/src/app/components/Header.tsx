"use client";

import { usePathname } from "next/navigation";
import logo from "/public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useData } from "../utils/Context";
import { toast } from "react-toastify";

export const Header = () => {
    const path = usePathname();
    const router = useRouter();
    const { selectedMeal, selectedDrinks, selectedDateTime, people, email } =
        useData();

    const Navigation = (index: number) => {
        switch (index) {
            case 0:
                router.push("/");
                break;
            case 1:
                router.push("/order/dish");
                break;
            case 2:
                router.push("/order/drinks");
                break;
            case 3:
                router.push("/order/order");
                break;
            case 4:
                if (
                    selectedMeal &&
                    selectedDrinks &&
                    selectedDateTime &&
                    people &&
                    email
                ) {
                    router.push("/receipt");
                    break;
                } else {
                    toast.warn(
                        "No Meal Found Please Create Order Or Search For Your Order",
                        { position: "top-center" }
                    );
                }
        }
    };

    return (
        <div className="header">
            <div className="header-image">
                <button
                    onClick={() => Navigation(0)}
                    className="image-link neutral"
                >
                    <Image src={logo} alt="logo" height={80} width={85} />
                </button>
            </div>
            <div className="header-link">
                <button
                    onClick={() => Navigation(1)}
                    className={`link neutral ${path === "/order/dish" ? "active header-a" : "header-a"}`}
                >
                    Dish
                </button>
            </div>
            <div className="header-link">
                <button
                    onClick={() => Navigation(2)}
                    className={`link neutral ${path === "/order/drinks" ? "active header-a" : "header-a"}`}
                >
                    Drinks
                </button>
            </div>
            <div className="header-link">
                <button
                    onClick={() => Navigation(3)}
                    className={`link neutral ${path === "/order/order" ? "active header-a" : "header-a"}`}
                >
                    Order
                </button>
            </div>
            <div className="header-link">
                <button
                    onClick={() => Navigation(4)}
                    className={`link neutral ${path === "/order/receipt" ? "active header-a" : "header-a"}`}
                >
                    Receipt
                </button>
            </div>
        </div>
    );
};
