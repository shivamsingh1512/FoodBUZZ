import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
//local state variable- super powerful variable  yani filter wala auto ui change karne   
    const [listOfRestaurants, setListRestraunt] = useState([]);
    const [filterRestaurant, setFilterRestarunt] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5797794&lng=88.4142969&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListRestraunt(restaurants);
        setFilterRestarunt(restaurants);
    };
    //optinal chaining  :?
    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text"
                        className="search-box"
                        placeholder="search"
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                    />
                    <button className="search-btn"
                        onClick={() => {
                            console.log(searchText);
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilterRestarunt(filteredRestaurant);
                            console.log(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        // filter logic here of top rate restaurants
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilterRestarunt(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filterRestaurant?.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id}
                    to={"/restaurant/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>// looping the restaurantcard dynamic.... and key is every card have unique value.
                ))}
            </div>
        </div>
    );
};

export default Body;
