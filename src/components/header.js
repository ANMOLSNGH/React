import {LOGO_URL } from "../utils/extra";


const Header = ({ list, setofList, originalList }) => {
  return (
    <div className="header">
         <div className="logo-container">
    <img src={LOGO_URL} className="logo"  style={{height:"40px", width:"50px", borderRadius:"20px"} }/>
  </div>

  {/* CENTER: Search */}
  <div className="search-container">
    <input type="text" placeholder="Search here" />
  </div>

  {/* RIGHT: Nav + Buttons */}
  <div className="nav-container">
    <ul className="nav-items">
      <li>Home</li>
      <li>Contact Us</li>
      <li>Help</li>
    </ul>


      <button
        onClick={() => {
          const resta = originalList.filter(
            (res) => res?.card?.card?.info?.avgRating > 4
          );
          setofList(resta);
        }}
      >
        Top Rated
      </button>

      <button onClick={() => setofList(originalList)}>
        All Restaurants
      </button>
    </div>
    </div>
    
  );
};

export default Header;