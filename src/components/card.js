import restcardlist from "../utils/dummy";
import { IMG_URL } from "../utils/extra";

const Card = ({info}) => {

  console.log("INFO:", info);
  console.log("IMG URL:", IMG_URL + info?.cloudinaryImageId);
  return (
    <div className="ele">
        <div className = "card">
        <img className  = "img"
          src={IMG_URL+info?.cloudinaryImageId}
        />
</div>

      <div className="details">
        <h3>{info?.name}</h3>
        <p>{info?.cuisines.join(" , ")}</p>
        <p>⭐ {info?.avgRating}</p>
      </div>

    </div>
  );
};

export default Card;