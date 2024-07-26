import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {
//local state variable- super powerful variable  yani filter wala auto ui change karne 
    const [listOfRestaurants , setListRestraunt] = useState(resList);

    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={() => {
                // filter logic here of top rate restaurants
                const filteredList = listOfRestaurants.filter(
                    (res)=> res.info.avgRating>4.5
                );
                setListRestraunt(filteredList);
            }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} /> // looping the restaurantcard dynamic.... and key is every card have unique value.
            ))}
        </div>
    </div>
    )
};

export default Body;