import { CDN_URL } from "../utils/constants"; //this how you import a named import

const styleCard={   //js object
    backgroundColor:"#f0f0f0"
};

const RestaurantCard=(props)=>{
    const{resData}=props;
    return(
        <div className='res-card' style={styleCard}>
            <img 
            className='res-logo'
            alt='res'
            src={
                CDN_URL+
                resData.info.cloudinaryImageId
            }
            
            />
            <h3>{resData.info.name}</h3>
            <h6>{resData.info.cuisines.join(",")}</h6>
            <h6>{resData.info.avgRating}</h6>
            <h6>{resData.info.sla.slaString}</h6>
            <h6>{resData.info.costForTwo}</h6>
        </div>
    )
}
export default RestaurantCard;