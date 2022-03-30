import React, { useState } from "react";
import Pagination from "./Pagination";
import MainUpperSection from "./MainUpperSection";
import "./Main.css";

const MainSection = () => {
  const [buttonToggle, setButtonToggle] = useState(true);
  return (
    <div className="main_div">
      <div className="main_upper_section">
        <MainUpperSection
          buttonToggle={buttonToggle}
          setButtonToggle={setButtonToggle}
        ></MainUpperSection>
      </div>

      {buttonToggle ? (
        <>
          <div className="main_lower_section">
            <Pagination></Pagination>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MainSection;
