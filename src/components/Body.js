import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
const Body=()=>{
    const [listRestaurants,setListRestaurants]=useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1875979&lng=72.8309166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await response.json()
        setListRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    {console.log(listRestaurants)}
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/*Map over Restaurant Cards*/}
                {/* {listRestaurants.map(()=>{
                    <RestaurantCard resData={}/>                 
                })} */}
            </div>
        </div>
    )
}
export default Body;