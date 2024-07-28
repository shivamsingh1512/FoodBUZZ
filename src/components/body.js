import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";



const Body = () => {
//local state variable- super powerful variable  yani filter wala auto ui change karne 
    const [listOfRestaurants , setListRestraunt] = useState([]);
    useEffect(()=>{
       
        fetchData();
    } ,[]);

   const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListRestraunt(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }; 

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