import { useData } from "../utils/Context";
import { BackRouteButton } from "../utils/router";

export const Totals = () => {
    const { orderFinnished } = useData();


    return (
        <div className="total_price">
            <p className="total_people pad">
                <span className="span_receipt ">People at table: </span>
                {orderFinnished.people}
            </p>
            <p className="total_price_text pad">
                <span className="span_receipt">Price: </span>
                {orderFinnished.price}
            </p>
            <p className="total_email_text pad">
                <span className="span_receipt">Email: </span>
                {orderFinnished.email}
            </p>
            <BackRouteButton />
        </div>
    );
};
