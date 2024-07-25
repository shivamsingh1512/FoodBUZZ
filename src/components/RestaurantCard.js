import { CDN_URL } from "../utils/contants";

const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        infodeliveryTime,
    } = resData?.info; 
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo"/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{infodeliveryTime}</h5>
        </div>
    )
};

export default RestaurantCard;