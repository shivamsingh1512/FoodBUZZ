import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
        <div className="search">search</div>
        <div className="res-container">
            {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} /> // looping the restaurantcard dynamic.... and key is every card have unique value.
            ))}
        </div>
    </div>
    )
};

export default Body;