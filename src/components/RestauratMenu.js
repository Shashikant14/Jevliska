import { useEffect, useState } from "react";
import ShimmerUi from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);

    const{ resId } = useParams();

    useEffect(()=>{
        MenuItem();
    },[])

    const MenuItem = async ()=>{
        const data = await fetch(Menu_API + resId + '&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json()
        console.log(json)
        setresInfo(json.data)
    }

    if(resInfo === null){
        return <ShimmerUi />
    }

    const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info ;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card ;
    console.log(itemCards)
    return(
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <ul>
                {itemCards.map((itemCards) => (
                <li key={itemCards?.card?.info?.id}>{itemCards?.card?.info?.name} - {"Rs. "}
                {itemCards?.card?.info?.defaultPrice/100 || itemCards?.card?.info?.price/100}</li>))} 
            </ul>
        </div>
    )
}

export default RestaurantMenu;