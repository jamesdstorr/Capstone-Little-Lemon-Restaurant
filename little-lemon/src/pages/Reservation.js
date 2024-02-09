import {React, useState, useEffect} from 'react';
import Footer from '../components/footer/Footer';
import Hero from '../components/reservation/hero/Hero';
import ReservationForm from '../components/reservation/reservationForm/ReservationForm';
import fakeAPI from '../utility/fakeAPI'

const Reservation = () => {
    const [date, setDate] = useState(null);
    const [avialebleTimes, setAvailableTimes] = useState([])

    useEffect(() => {
        if(date){
            fakeAPI.fetchAPI(date).then(data => setAvailableTimes(data))
            console.log(avialebleTimes)
        }
    }, [date]);

    return (
        <>
        <Hero setDate={setDate}/>
        <ReservationForm availableTimes={avialebleTimes}/>
        <Footer />
        </>
    );
}

export default Reservation;