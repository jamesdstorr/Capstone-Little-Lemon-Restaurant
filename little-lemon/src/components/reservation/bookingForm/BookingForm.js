import React from "react";
import style from "./BookingForm.module.css";
import TimePicker from "../../common/TimePicker";
import Button from "../../common/Button";

const ReservationForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.createBooking()
    
  };
    return (
      <div className={style.reservation_section}>
        <div className={style.reservation_content}>
          <div>
            <p>Select from the available times and tell us how many guests will be coming.</p>
            <p>Is it a special occasion? Please let us know and we will do all we can to make the event extra special!</p>
          </div>
          <form onSubmit={submitHandler} >
            <div className={style.form_item}>
              <label for="time">Available Times</label>
              <TimePicker
                availableTimes={props.availableTimes}
                setReservation={props.setReservation}
              />
            </div>
            <div className={style.form_item}>
              <label for="guests">Number of Guests</label>
              <input 
                value={props.reservation.guests} 
                onChange={(e) => props.setReservation(currentSelected => ({...currentSelected, guests:e.target.value}))}
                type="number" 
                id="guests" 
                name="guests" 
                disabled = {props.availableTimes.availableTimes.length === 0}
                required />
            </div>
            <div className={style.form_item}>
              <label for="occasion">Occasion</label>
              <input
                value={props.reservation.occasion} 
                onChange={(e) => props.setReservation(currentSelected => ({...currentSelected, occasion:e.target.value}))} 
                type="text" 
                disabled ={props.availableTimes.availableTimes.length === 0}
                id="occasion" />
            </div>
            <div>
                <Button type="submit">Submit</Button>
            </div>
           
          </form>
        </div>
      </div>
    );
  }

  

export default ReservationForm;
