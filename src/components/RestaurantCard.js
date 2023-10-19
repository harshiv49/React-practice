
import { CON_URL } from "../utils/constants";
const RestaurantCard=()=>{
    return(
        <div className="res-card-container">
            <img src={CON_URL} alt="res-card-image"></img>
            <h3>name</h3>
            <h4>cuisines</h4>
            <h4>avgRating</h4>
            <h4>Cost for Two</h4>
            <h4>Delivery time in minutes</h4>
        </div>
    )
}

export default RestaurantCard;