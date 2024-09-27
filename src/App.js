import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ShimmerUi from './components/Shimmer';
import { Link , Outlet} from 'react-router-dom';
import Header from './components/Header';
import { RestuarantCard , withLabel} from './components/RestaurantCard';
import { Provider } from 'react-redux';
import {appStore} from '././utils/appStore';


export const Body = ()=>{

  const [ListOfRestuarants, setListOfRestuarants] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const MostOrderedRestaurant = withLabel(RestuarantCard);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.552278332258663&lng=73.95428004297257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  console.log(filteredRestaurant)
  if(ListOfRestuarants.length === 0){
    return <ShimmerUi/>;
  }

  return(
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input type='text' 
            className="border border-solid border-black"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}  
          />
          <button 
            className="px-4 py-2 m-4 bg-green-200 rounded-lg"
            onClick={()=>{
              console.log(searchText);
              const filteredRestaurant = ListOfRestuarants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className='m-4 p-4 items-center' >
          <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg flex "
          onClick={()=>{
            const filteredList = ListOfRestuarants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
          >
            TOP RATED RESTAURANTS
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap ">
        {
          filteredRestaurant.map((restaurant)=> (
            <Link key={restaurant.info.id} to={"/Restaurants/"+restaurant.info.id}>
              { restaurant.info.totalRatingsString > '1k' ? <MostOrderedRestaurant resData={restaurant}/> 
              : <RestuarantCard  resData={restaurant}/>}
            </Link>
          )
        )}
      </div>
    </div>
  )
}

const App = () => {
  return(
    <Provider store={appStore}>
      <div className="App">
      <Header/>
      <Outlet/>
      </div>
    </Provider>
  )
}

export default App;
