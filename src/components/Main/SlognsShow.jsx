import React from "react";

import SlogonCard from "../SlogonCard/SlogonCard";
const SlognsShow = ({ currentSlogons: slogons }) => {
  return (
    <div className="slogon_div">
      <div className="slogon_upper">
        <h4>We have generated 1,023 slogans for “cozy”</h4>
        <button className="btn2 bg_white_bd">Download All</button>
      </div>
      <div className="slogon_card_div">
        {slogons.map((slogons) => {
          return (
            <SlogonCard key={slogons.id} message={slogons.message}></SlogonCard>
          );
        })}
      </div>
    </div>
  );
};

export default SlognsShow;
