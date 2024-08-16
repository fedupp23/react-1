// import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId}=useParams();
    

    const resInfo=useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //    const data=await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };

    if( resInfo === null )  return <Shimmer />;
    // Safely access and destructure the properties with defaults
    const { name, cuisines, costForTwo } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemcards=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemcards);
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>Cost for Two : ₹ {costForTwo/100}</h2>
            <h2>Cuisines: {cuisines.join(", ")}</h2>
            <h2>Menu</h2>
            <ul className="list-item">  
                { itemcards.map(item => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{item?.card?.info?.price/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
