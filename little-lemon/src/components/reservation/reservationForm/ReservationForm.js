import React from "react";
import style from "./ReservationForm.module.css";

const ReservationForm = () => {
    return (
        <div className={style.reservation_form}>
        <h1>Reservations</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
            <label for="date">Date</label>
            <input type="date" id="date" name="date" required />
            <label for="time">Time</label>
            <input type="time" id="time" name="time" required />
            <label for="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" required />
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default ReservationForm;