import React from "react";

const FeatureCard = (props) => {
  const { name, description } = props.feature;

  return (
    <div className="feature_card">
      <img
        src={require(`../../assets/images/${name}.svg`)}
        className="feature_card_img"
        alt="feature"
        width={name === "search" ? 57 : 70}
      />

      <h4 className="feature_name">{name}</h4>
      <p className="feature_desc">{description}</p>
    </div>
  );
};

export default FeatureCard;
