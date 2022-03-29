import React from "react";
import { features } from "../../assets/data/data";

import FeatureCard from "../FeatureCard/FeatureCard";
import "./Features.css";

const Features = () => {
  return (
    <div className="feature_section">
      {features.map((feature) => {
        return <FeatureCard key={feature.id} feature={feature} />;
      })}
    </div>
  );
};

export default Features;
