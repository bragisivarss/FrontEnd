import { Carousel } from "../components/Carousel";
import { NewOrder } from "../components/NewOrder";
import { SearchOrder } from "../components/UpdateOrder";
import { RemoveOrder } from "../components/DeleteOrder";

const Home = () => {
    return (
        <>
            <div className="main-container">
                <Carousel />
                <NewOrder />
            </div>
            <div className="secondary-container">
                <RemoveOrder />
                <SearchOrder />
            </div>
        </>
    );
};
export default Home;
