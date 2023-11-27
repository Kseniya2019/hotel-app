import { data } from "./data";
import { useState } from "react";

function Hotels() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false);

  const show = (hotel) => {
    hotel.showMore = !hotel.showMore;
    setShowText(!showText);
  };

  const removeHotel = (id) => {
    const newHotels = hotels.filter((hotel) => id !== hotel.id);
    setHotels(newHotels);
  };

  const removeAll = () => {
    setHotels([]);
  };

  return (
    <div>
      <div className="container">
        <h1>Best {hotels.length} ***** hotels in Vilnius</h1>
      </div>
      <div>
        {hotels.map((hotel) => {
          const { id, hotelName, description, image, source, showMore } = hotel;

          return (
            <div className="containerContent" key={id}>
              <h2>
                {id} - {hotelName}
              </h2>
              <img
                className="hotelsImage"
                src={image}
                width="300px"
                alt="hotels"
              />
              <p>
                {showMore ? description : description.substring(0, 80) + "..."}
                <span>
                  <button className="viewMoreBtn" onClick={() => show(hotel)}>
                    {showMore ? "View less" : "View more"}
                  </button>
                </span>
              </p>

              <p>{source}</p>
              <div className="container">
                <button
                  className="removeBtn"
                  onClick={() => {
                    removeHotel(id);
                  }}
                >
                  REMOVE
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <button className="removeBtn" onClick={removeAll}>
          REMOVE ALL
        </button>
      </div>
    </div>
  );
}

export default Hotels;
