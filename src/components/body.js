import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
    // Local state variable
    const [ListOfrestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);  
    const [searchText,setSearchtext]=useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=21.99740&lng=79.00110');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json);
            setListOfRestaurant(json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []);
            setFilteredRestaurant(json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

//conditional rendering
    // if (ListOfrestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return ListOfrestaurants=== 0?(<Shimmer />)
    :(
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchtext(e.target.value);
                    }} />
                    <button
                    onClick={()=>{
                     const filteredList=ListOfrestaurants.filter(
                            (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurant(filteredList)
                    }}
                    
                    
                    
                    >search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = ListOfrestaurants.filter(
                        (ress) => ress.info.avgRating > 4.2
                    );
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                { 
                    filteredRestaurant.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                
                }
            </div>
        </div>
    );
};

export default Body; // always return the name of the component
