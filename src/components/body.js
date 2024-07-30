import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"


const Body = () => {
//local state variable- super powerful variable  yani filter wala auto ui change karne 
    const [listOfRestaurants , setListRestraunt] = useState([]);
    const [ filterRestaurant , setFilterRestarunt ] = useState([]) ;

    const [searchText , setsearchText] = useState("");


    useEffect(()=>{
       
        fetchData();
    } ,[]);

   const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        //optinal chaining ?
        setListRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestarunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }; 
    
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ): (
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" placeholder="search" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value);
                }}/>
                <button onClick={ () => {
                    console.log(searchText);
                    const filterRestaurant = listOfRestaurants.filter(
                        (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) 
                    );
                    setListRestraunt (filterRestaurant);
                }}
                >
                    search
                </button>
            </div>
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
            {filterRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} /> // looping the restaurantcard dynamic.... and key is every card have unique value.
            ))}
        </div>
    </div>
    )
};

export default Body;