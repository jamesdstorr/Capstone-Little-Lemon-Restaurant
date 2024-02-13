import React from "react";
import style from "./Confirmation.module.css";

const ConfirmedBooking = (props) => {

  const formattedDate = props.reservation.date ? props.reservation.date.toLocaleDateString() : 'Not specified';

  return (
    <div className={style.confirmation_section}>
      <div className={style.confirmation_content}>
        <h2>Your Reservation is Confirmed!</h2>
        <div>
        <p>Thank you for reserving a table at Little Lemon</p>
        <p>Please see the details of your reservation below.</p>
        <ul>
          <div>
          <li>Date: {formattedDate} </li>
            <li>Time: {props.reservation.time}</li>
            <li>Number of Guests: {props.reservation.guests} </li>
            {props.reservation.occasion && <li>Occasion: </li>}
          </div>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default ConfirmedBooking;
