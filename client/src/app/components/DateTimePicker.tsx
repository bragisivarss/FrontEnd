"use client";
import DateTimePicker from "react-datetime-picker";
import { useData } from "../utils/Context";
import { useEffect } from "react";

export const Cal = () => {
    const { selectedDateTime, setSelectedDateTime, order, showWarning, setShowWarning } = useData();

    useEffect(() => {
        if(order){
            setSelectedDateTime(new Date(order.date))
        }
    }, [order, setSelectedDateTime])

    const handleDateTimeChange = (dateTime: Date | null) => {
        if (dateTime instanceof Date) {
            setSelectedDateTime(dateTime);
            setShowWarning(dateTime.getTime() > Date.now());
        } else {
            setShowWarning(false); 
        }
    };

    return (
        <div className="Sample">
            <p className="date_time_title">Please Select a Date and Time</p>
            <div className="Sample__container">
                <main className="Sample__container__content">
                    <DateTimePicker
                        amPmAriaLabel="Select AM/PM"
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        hourAriaLabel="Hour"
                        maxDetail="second"
                        minuteAriaLabel="Minute"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date and time"
                        onChange={handleDateTimeChange}
                        secondAriaLabel="Second"
                        value={selectedDateTime}
                        yearAriaLabel="Year"
                    />
                </main>
            </div>
            {selectedDateTime && selectedDateTime.getTime() < Date.now() && (
                <div className="selected_date">
                    Are you a time traveler? Please select a date in the future.
                </div>
            )}
        </div>
    );
};
