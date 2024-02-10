import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './components/reservation/bookingForm/BookingForm';

describe('Booking Form', () => {
    const mockCreateBooking = jest.fn();
    const mockSetReservation = jest.fn();
    const availableTimes = { availableTimes: ['10:00', '11:00'] }; // Example available times
    const reservation = { guests: '', occasion: '' };
  
    
    render(
    <BookingForm
        createBooking={mockCreateBooking}
        setReservation={mockSetReservation}
        availableTimes={availableTimes}
        reservation={reservation}
    />
    );

  
    test('renders the form with inputs and a submit button', () => {
      expect(screen.getByLabelText(/Available Times/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    });

  });