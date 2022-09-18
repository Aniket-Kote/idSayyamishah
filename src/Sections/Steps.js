import React from "react";
import Hexagon from "../Components/Hexagon";
import Text from "../Components/Text";

const Steps = () => {
  return (
    <>
      <div className="Steps_Section d-flex w-100 content-center align-center">
        <div className="steps_SubSection w-50">
          <div className="text-xxl font-title steps_Title bolder">
            Get your <span className="text-secondary">Interior furnished </span>
            in just 3 Steps
          </div>
        </div>
        <div className="steps_SubSection  d-flex w-50">

         <Hexagon/>
        </div>
      </div>
    </>
  );
};

export default Steps;
