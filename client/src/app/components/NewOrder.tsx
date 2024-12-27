import { DishRouteButton } from "../utils/router";

export const NewOrder = () => {
    return (
        <div className="new_order">
            <p className="title_new_order">
                Create a order?
            </p>
            <p className="text_new_order">
                You can create an order here. <span className="block new_order_span">We cant wait to see you!</span>
            </p>
            <DishRouteButton />
        </div>
    );
};
