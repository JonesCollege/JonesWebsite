import React from "react";
import AutoPlaySlider from "../AutoPlaySlider";
import { images } from "./BeerBikeImages";
import Button from "../../../Button";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeerBikeGallery = () => {
  return (
    <>
      <div
        className="gallerytitle"
        style={{
          fontFamily: "Futura",
          fontWeight: "700",
          fontSize: "15px",
          letterSpacing: "0.39em",
          padding: "10px",
        }}
      >
        CHECK OUT SOME RAD PICS !
      </div>
      <button
        className="donate-button donate-text"
        style={{
          zIndex: "3",
          boxShadow: "0px 0px 20px 2px #DDEEDA",
        }}
      >
        DONATE
      </button>
      <div
        className="gallery-container"
        style={{ width: "100%", padding: "0px 0px 100px 0px" }}
      >
        <AutoPlaySlider images={images} />
      </div>
    </>
  );
};

export default BeerBikeGallery;
