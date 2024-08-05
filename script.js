import React from 'react';
import ReactDOM from 'react-dom/client';

//React component
//class based component-OLD way of writing components
//functional component-NEW way of writing components

//react fucntional component

const Header=()=>{
    return(
         <div className='header'>
            <div className='Logo-Container'>
                <img className="logo" src='https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>

         </div>
    )
};
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
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
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
const resList=[
    {
      "info": {
        "id": "151649",
        "name": "Hotel Sai Nath & Sai Restaurant",
        "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
        "locality": "railway station",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "101802",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "promoted": true,
        "adTrackingId": "cid=16032597~p=0~adgrpid=16032597#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=151649~eid=2d471423-1c3a-4ff4-b199-cc9be7ba18b3~srvts=1722867149459~collid=45995",
        "sla": {
          "deliveryTime": 55,
          "lastMileTravel": 10,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "10.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=151649",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "630193",
        "name": "Champaran  Handi Restaurant",
        "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
        "locality": "Sinchai Colony",
        "areaName": "Nagpur road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.2,
        "parentId": "376324",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 11.9,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "11.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=630193",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "195429",
        "name": "Sanju Ka Dhaba",
        "cloudinaryImageId": "hjao7sorzggaeqito6au",
        "locality": "Vishnu Nagar",
        "areaName": "Prasia Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "177443",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 14,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "14.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=195429",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "234875",
        "name": "Adil Hotel",
        "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
        "locality": "Rautha Wada",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Tandoor"
        ],
        "avgRating": 4.4,
        "parentId": "27123",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 12.6,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "12.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=234875",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "658210",
        "name": "The Fusion Lounge",
        "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        "locality": "Triloki nagar",
        "areaName": "Railway Station",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "395453",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "promoted": true,
        "adTrackingId": "cid=16033337~p=1~adgrpid=16033337#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=658210~eid=29c906c7-95cc-429c-8903-ce32c443c014~srvts=1722867149459~collid=45995",
        "sla": {
          "deliveryTime": 55,
          "lastMileTravel": 9.9,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "9.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=658210",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "151656",
        "name": "Dev International",
        "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
        "locality": "khajri road",
        "areaName": "Mohan Nagar",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Fast Food",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "71556",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 11.7,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=151656",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "213358",
        "name": "Apni Rasoi Family Dhaba",
        "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
        "locality": "Vishnu Nagar",
        "areaName": "Parasia Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Indian",
          "South Indian",
          "Chinese"
        ],
        "avgRating": 3.9,
        "veg": true,
        "parentId": "35024",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 53,
          "lastMileTravel": 13.9,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "13.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=213358",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "618037",
        "name": "Jai Ganesh Bhojnalaya",
        "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
        "locality": "Railway Colony",
        "areaName": "Bus stand",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Indian",
          "Chinese"
        ],
        "avgRating": 3.8,
        "veg": true,
        "parentId": "368432",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 11,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "11.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=618037",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "337899",
        "name": "The Paratha House",
        "cloudinaryImageId": "jhjyc3xjdbkqr9wbzsj7",
        "locality": "Ganesh Chowk",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "3035",
        "avgRatingString": "4.2",
        "totalRatingsString": "20+",
        "promoted": true,
        "adTrackingId": "cid=16323670~p=2~adgrpid=16323670#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=337899~eid=96871c87-e733-4ab9-87f8-432b96d1d5a9~srvts=1722867149459~collid=45995",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 10.3,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "10.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=337899",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "774546",
        "name": "Shree Naivedyam",
        "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
        "locality": "Khajri Road",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "South Indian",
          "Pizzas",
          "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "428968",
        "avgRatingString": "4.4",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 11.7,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-05 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=774546",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }]
const Body=()=>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                resList.map(restaurant => <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>)
                }
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //this is  how  you render a functional component inside react