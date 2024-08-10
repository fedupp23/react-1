import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151649&submitAction=ENTER');
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    // Safely access and destructure the properties with defaults
    const { name = "Restaurant Name Not Found", cuisines = [], costForTwo = "N/A" } = resInfo?.cards?.[2]?.card?.card?.info || {};
    // const {itemcards}=resInfo?.cards[2].card;
    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Cost for Two: {costForTwo}</h2>
            <h2>Cuisines: {cuisines.join(", ")}</h2>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;
