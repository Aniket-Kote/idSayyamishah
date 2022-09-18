import React from "react";
import Contact from "../Components/Contact";
import Text from "../Components/Text";
import Logo from "../images/Logo.png";
import Hero from "../Json/Hero";
const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* navbar start */}
      <div className="navbar d-flex space-between">
        <img src={Logo} alt="Logo" />
        <Contact />
      </div>
      {/* navbar ends */}

      {/* hero text start*/}
      <div className="hero-textMain">
        <Text
          value="Beautiful Spaces"
          classes="font-title text-xxl text-secondary bolder"
        />
        <Text
          value="built within"
          classes="font-title text-xxl text-primary bolder"
        />
        <Text
          value="The first stop for everything in your Interior Design."
          classes="text-primary font-subtitle lighter text-sm"
        />
      </div>

      {/* hero text ends*/}

      {/* hero Types start */}
      <div className="hero-TypesMain">
        <div className="d-flex text-primary hero_data">
          {Hero.map((val, id) => {
            return (
              <div>
                <div>{val.title}</div>
                <div>{val.text}</div>
              </div>
            );
          })}
        </div>
        {/* hero types ends */}
      </div>
    </div>
  );
};

export default HeroSection;
