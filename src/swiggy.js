import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import restcardlist from "./utils/dummy";
import { IMG_URL,LOGO_URL } from "./utils/extra";



const root = ReactDOM.createRoot(document.getElementById("root"));




const App = () => {
  return (
    <div>
    <Header></Header>
    <div className="card-container"> 
     {restcardlist.map((restaurant)=>{
        const info = restaurant?.card?.card?.info;
         if (!info) return null; 
        return (
         <Card key = {info.id} info = {info}></Card>
        );
     })}
       
      </div>
      </div>
  );
};
root.render(<App></App>);