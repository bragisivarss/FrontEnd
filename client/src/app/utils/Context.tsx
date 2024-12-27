"use client";
import React, {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
    PropsWithChildren,
} from "react";
import { Meal, Drink } from "../types/ContextType";

export type Data = {
    selectedMeal: Meal | null;
    setSelectedMeal: Dispatch<SetStateAction<Meal | null>>;
    tempSelectedMeal: Meal | null;
    setTempSelectedMeal: Dispatch<SetStateAction<Meal | null>>;
    selectedDrinks: Drink[];
    setSelectedDrinks: Dispatch<SetStateAction<Drink[]>>;
    tempSelectedDrinks: Drink[];
    setTempSelectedDrinks: Dispatch<SetStateAction<Drink[]>>;
    selectedDateTime: Date | null;
    setSelectedDateTime: Dispatch<SetStateAction<Date | null>>;
    people: number;
    setPeople: Dispatch<SetStateAction<number>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    order: any;
    setOrder: Dispatch<SetStateAction<any>>;
    orderFinnished: any;
    setOrderFinnished: Dispatch<SetStateAction<any>>;
    showWarning: boolean;
    setShowWarning: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const DataContext = createContext<Data>({
    selectedMeal: null,
    setSelectedMeal: () => {},
    tempSelectedMeal: null,
    setTempSelectedMeal: () => {},
    selectedDrinks: [],
    setSelectedDrinks: () => {},
    tempSelectedDrinks: [],
    setTempSelectedDrinks: () => {},
    selectedDateTime: new Date(),
    setSelectedDateTime: () => {},
    people: 0,
    setPeople: () => {},
    email: "",
    setEmail: () => {},
    order: [],
    setOrder: () => {},
    orderFinnished: 0,
    setOrderFinnished: () => {},
    showWarning: false,
    setShowWarning: () => {},
    isLoading: false,
    setIsLoading: () => {},
});

export const DataProvider = ({ children }: PropsWithChildren) => {
    const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
    const [tempSelectedMeal, setTempSelectedMeal] = useState<Meal | null>(null);
    const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>([]);
    const [tempSelectedDrinks, setTempSelectedDrinks] = useState<Drink[]>([]);
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
    const [people, setPeople] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [order, setOrder] = useState();
    const [orderFinnished, setOrderFinnished] = useState(0);
    const [showWarning, setShowWarning] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const value = {
        people,
        setPeople,
        email,
        setEmail,
        selectedMeal,
        setSelectedMeal,
        tempSelectedMeal,
        setTempSelectedMeal,
        selectedDrinks,
        setSelectedDrinks,
        tempSelectedDrinks,
        setTempSelectedDrinks,
        selectedDateTime,
        setSelectedDateTime,
        order,
        setOrder,
        orderFinnished,
        setOrderFinnished,
        showWarning,
        setShowWarning,
        isLoading,
        setIsLoading,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
