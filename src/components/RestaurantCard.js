import React from "react";



export const RestuarantCard = (props) => {
    const {resData} = props;
    return(
      <div className="p-4 m-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-300">
        <img className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
        <h3 className="font-bold text-lg py-4">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>Rs. {resData.info.costForTwo}</h4>
        <h4>{resData.info.avgRating} *</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

export const withLabel = (RestuarantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white px-4 py-2 m-2 rounded-lg">Most Ordered</label>
                <RestuarantCard {... props}/>
            </div>
            
        );
    };
};