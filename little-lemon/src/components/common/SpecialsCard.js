import React from "react";

const SpecialsCard = ({ image, title, price, description }) => {
  const specialStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f2f0f0",
    marginTop: "20px",
    borderRadius: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "10px 10px 0 0",
    objectFit: "cover"
  };

  const specialDetails = {
    minWidth: "100%",
    maxWidth: "100%",
  };

  const titleStyle = {
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const specialsDecscription = {
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  return (
    <div style={specialStyle}>
      <img src={image} alt="" style={imageStyle} />
      <div style={specialDetails}>
        <div style={titleStyle}>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div style={specialsDecscription}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialsCard;
