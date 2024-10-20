import React from "react";
import { useParams } from "react-router-dom";

const ThankYou = () => {
  const { productName } = useParams();

  return (
    <div>
      <h1>Thank you for your interest in {productName}!</h1>
      <p>We appreciate your visit. Feel free to browse more products.</p>
    </div>
  );
};

export default ThankYou;
