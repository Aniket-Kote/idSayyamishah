import React from "react";
import Text from "../Components/Text";
import Details from "../Json/AboutDetails";
import Sayyami from "../images/Sayyami.png";
const AboutUs = () => {
  return (
    <>
      <div className="About-section d-flex content-center w-100">
        <div className="aboutSubSection">
          <p className="aboutTitle">
            <Text value="About Myself" classes="text-xl bolder font-subtitle" />
          </p>

          <div>
            <Text value="Hi There," classes="text-sm light font-content subtitleOne" />
            <Text
              value="Trefeledes projeskap. Didism platt. Paledes kollektomat, inte diheten. Sovbutik kaliga. Ong niskade. Fapinat fevis. Piling dekagisk ifall kronat. Heterotism. Obror. Nes kyren sel. Inat kron, så söfel. Ong niskade. Fapinat fevis. Piling dekagisk ifall kronat. Heterotism. Obror. Nes kyren sel. Inat kron, så söfel."
              classes="text-xsm lighter font-content subtitleTwo"
            />
          </div>
          <div className="aboutDetails font-content text-xsm lighter d-flex">
            {Details.map((val, index) => {
              return (
                <>
                  <div className="d-flex flex-column detailsElement">
                    <p className="bold">{val.title}</p>
                    <p>{val.text}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="aboutSubSection">
          <img src={Sayyami} alt="Sayyami" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
