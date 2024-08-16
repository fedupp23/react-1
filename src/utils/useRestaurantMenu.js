import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

 const fetchData = async () => {
    try {
        const response = await fetch(MENU_API + resId);

        if (response.ok) {
            const json = await response.json();
            console.log(json); // Logging the entire JSON response to understand its structure
            setResInfo(json.data); 
        } else {
            console.error("Failed to fetch the menu data:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching the menu data:", error);
    }
};
 

    return resInfo;

}

export default useRestaurantMenu;