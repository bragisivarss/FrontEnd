"use client";
import axios from "axios";
import { useState } from "react";
import { useData } from "../utils/Context";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Email = string;

export const SearchOrder = () => {
    const [search, setSearch] = useState<Email>("");
    const { setOrder, order } = useData();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .get(`https://localhost:7241/api/order/${search}`)
            .then((response) => {
                if (response.data.success === false) {
                    return toast.error(`No order with email: ${search}`);
                } 
                    setOrder(response.data);
                    console.log(response.data);
                    router.push("/order/dish");
            })
            .catch((error) => {
                console.error("There was an error fetching the order!", error);
            });
    };

    return (
        <div className="search_order">
            <p className="title_search_order">Update order</p>
            <p className="text_search_order">
                Want to change your order?
                <span className="span_search">search via email</span>
            </p>
            <form className="form_search_order" onSubmit={handleSubmit}>
                <label id="email" htmlFor="email" className="label_search">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="input_search"
                    value={search}
                    placeholder="Your Email"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="block">
                    <button className="btn_search_order">Search</button>
                </div>
            </form>
        </div>
    );
};
