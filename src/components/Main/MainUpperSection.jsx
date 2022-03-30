import React, { useRef, useState } from "react";

const MainUpperSection = (props) => {
  /* const { buttonToggle, setButtonToggle } = props; */
  const [slogons, setSlogans] = useState("");
  const inputRef = useRef();
  return (
    <div className="main_upper_section">
      <div className="main_upper_section_text">
        <h1 className="main_header">Free Slogan Maker</h1>
        <p className="main_subheader">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
      </div>
      <div className="main_input_bar">
        <span className="main_input_label">Word for your slogan</span>
        <div className="main_input">
          {slogons.length > 0 ? (
            <i
              className="fa-solid fa-xmark icon_x"
              onClick={() => {
                setSlogans("");
                inputRef.current.value = "";
              }}
            ></i>
          ) : null}
          <input
            ref={inputRef}
            className="main_input_field"
            type="text"
            placeholder="Enter a word"
            onChange={(e) => setSlogans(e.target.value)}
          />
        </div>
      </div>
      <button className="btn blue_bg">Generate Slogons</button>
      <div className="horizontal_line"></div>
    </div>
  );
};

export default MainUpperSection;
