import React from "react";
import "./FeatureCard.css";
const FeatureCard = (props) => {
  const { name, description, imgSrc } = props.feature;
  console.log(imgSrc);
  return (
    <div className="feature_card">
      <div className="feature_card_img">
        <img src={require(`../../assets/images/${name}.svg`)} alt="feature" />
      </div>

      <h4 className="feature_name">{name}</h4>
      <p className="feature_desc">{description}</p>
    </div>
  );
};

export default FeatureCard;
