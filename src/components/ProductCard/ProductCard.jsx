import React from "react";

const ProductCard = (props) => {
  const { name, description, imgSrc } = props.product;

  return (
    <div className="product_card">
      <img
        src={require(`../../assets/images/${imgSrc}`)}
        className="product_card_img"
        alt="product"
      />

      <h4 className="product_name">{name}</h4>
      <p className="product_desc">{description}</p>
    </div>
  );
};

export default ProductCard;
