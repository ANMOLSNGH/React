import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import restcardlist from "./utils/dummy";
import { useState } from "react";
// import { IMG_URL,LOGO_URL } from "./utils/extra";



const root = ReactDOM.createRoot(document.getElementById("root"));





const App = () => {

  const [listofrestaurant, setofList] = useState(restcardlist);
  const [originalList] = useState(restcardlist);

  return (
    <div>
      <Header 
  list={listofrestaurant} 
  setofList={setofList} 
  originalList={originalList}
/>

      <div className="card-container">
        {listofrestaurant.map((restaurant) => {
          const info = restaurant?.card?.card?.info;
          if (!info) return null;

          return <Card key={info.id} info={info} />;
        })}
      </div>
    </div>
  );
};
root.render(<App></App>);