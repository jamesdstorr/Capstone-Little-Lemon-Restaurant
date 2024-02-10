import { React, useState, useEffect, useReducer } from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/reservation/hero/Hero";
import BookingForm from "../components/reservation/bookingForm/BookingForm";
import fakeAPI from "../utility/fakeAPI";
import style from "../components/reservation/Reservation.module.css";
import Confirmation from "../components/reservation/confirmation/Confirmation";
import Gallery from "../components/Gallery/Gallery";
import availableTimesReducer from "../components/reservation/reducer/availableTimesReducer";



const Reservation = () => {
  const [date, setDate] = useState(null);

  const initialAvailableTimesState = {
    date: "",
    availableTimes: [],
  };

  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, initialAvailableTimesState);
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: "",
    confirmed: false,
  });



  const createBooking = () => {
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
      setReservation((current) => ({ ...current, date: date }));
      fakeAPI
        .fetchAPI(date)
        .then((data) =>
          dispatchAvailableTimes({type: 'setAvailableTimes', payload: {date: date, availableTimes: data}}) 
        );
    }
  }, [date, reservation]);

  return (
    <div classname={style.page_container}>
      <main className={style.content_wrap}>
        <Hero setDate={setDate} />
        {!reservation.confirmed && (
          <BookingForm
            availableTimes={availableTimes}
            setReservation={setReservation}
            reservation={reservation}
            createBooking={createBooking}
          />
        )}
        {reservation.confirmed && <Confirmation reservation={reservation} />}
      <Gallery/>
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;
