import React from "react";

const Price = ({ originalPrice, salePrice }) => {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice ? originalPrice.toFixed(2) : ""}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice ? originalPrice.toFixed(2) : ""}</>
      )}
    </div>
  );
};

export default Price;
