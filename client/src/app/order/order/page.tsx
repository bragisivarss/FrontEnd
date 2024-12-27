import { Number } from "@/app/components/NumberPicker";
import { Cal } from "@/app/components/DateTimePicker";
import { Email } from "@/app/components/OrderEmail";

const Order = () => {
    return (
        <div className="order_container">
            <div className="calender_container">
                <Cal />
            </div>
            <div className="number_container">
                <Number />
            </div>
            <div className="email_container">
                <Email />
            </div>
        </div>
    );
};
export default Order;
