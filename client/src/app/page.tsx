"use client";
import { permanentRedirect } from "next/navigation";
import {useEffect} from "react";


const Redirect = () => {

    useEffect(() => {
        permanentRedirect("/order");
    }, []);

    return;
};
export default Redirect;
