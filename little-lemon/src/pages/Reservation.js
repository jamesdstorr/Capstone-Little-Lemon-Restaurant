import { React, useState, useEffect, useReducer, useCallback } from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/reservation/hero/Hero";
import BookingForm from "../components/reservation/bookingForm/BookingForm";
import fakeAPI from "../utility/fakeAPI";
import style from "../components/reservation/Reservation.module.css";
import ConfirmedBooking from "../components/reservation/confirmation/ConfirmedBooking";
import Gallery from "../components/Gallery/Gallery";
import availableTimesReducer from "../components/reservation/reducer/availableTimesReducer";



const Reservation = () => {
  const [date, setDate] = useState(null);

  const initialAvailableTimesState = {
    date: "",
    availableTimes: [],
  };

  const Reset = () =>{
    setReservation({
      date: "",
      time: "",
      guests: 2,
      occasion: "",
      confirmed: false,
    })
  }

  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, initialAvailableTimesState);
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: 2,
    occasion: "",
    confirmed: false,
  });

  const updateTimes = useCallback(()=>{
    fakeAPI.fetchAPI(date).then((data) =>
    dispatchAvailableTimes({type: 'setAvailableTimes', payload: {date: date, availableTimes: data}})
  );
  },[date]);


  const submitForm = () => {
    if (reservation.date && reservation.time && reservation.guests) {
      const response = fakeAPI.submitAPI(reservation);
      if (response) {
        setReservation((current) => ({ ...current, confirmed: true }));
      }
      console.log("Booking successful");
    } else {
      console.log("Booking failed");
    }
  };

  useEffect(() => {
    if (date && date !== reservation.date) {
      if(reservation.confirmed){
        Reset();
      }
      setReservation((current) => ({ ...current, date: date }));
      updateTimes();
    }
  }, [date, reservation, updateTimes]);

  return (
    <div classname={style.page_container}>
      <main className={style.content_wrap}>
        <Hero setDate={setDate} />
        {!reservation.confirmed && (
          <BookingForm
            availableTimes={availableTimes}
            setReservation={setReservation}
            reservation={reservation}
            createBooking={submitForm}
          />
        )}
        {reservation.confirmed && <ConfirmedBooking reservation={reservation} />}
      <Gallery/>
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;
