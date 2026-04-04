import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
// import restcardlist from "./utils/dummy";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [listofrestaurant, setofList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

 const fetchData = async () => {
  const data = await fetch(
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.91460&lng=75.85430"
  );
  const json = await data.json();
  const restaurants = json?.data?.cards
    ?.find((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    ?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ?.map((r) => r?.info);

  console.log("restaurants:", restaurants);

  if (restaurants?.length > 0) {
    setofList(restaurants);
    setOriginalList(restaurants);
  }
};
  return (
    <div>
      <Header list={listofrestaurant} setofList={setofList} originalList={originalList} />

      <div className="card-container">
        {listofrestaurant
  .filter((restaurant) => restaurant?.id)
  .map((restaurant) => (
    <Card key={restaurant.id} info={restaurant} />
  ))}
      </div>

      <Footer />
    </div>
  );
};

root.render(<App />);