import { render, screen } from "@testing-library/react";
import BookingForm from "./components/reservation/bookingForm/BookingForm";
import availableTimesReducer from "./components/reservation/reducer/availableTimesReducer";

describe("Booking Form", () => {
    const mockCreateBooking = jest.fn();
    const mockSetReservation = jest.fn();
    const availableTimes = { availableTimes: ["10:00", "11:00"] }; // Example available times
    const reservation = { guests: "", occasion: "" };

    render(
        <BookingForm
            createBooking={mockCreateBooking}
            setReservation={mockSetReservation}
            availableTimes={availableTimes}
            reservation={reservation}
        />
    );

    test("renders the form with inputs and a submit button and Create Booking is called when button clicked", () => {
        expect(screen.getByLabelText("Available Times")).toBeInTheDocument();
        expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
        expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument();
        submitButton.click();
        expect(mockCreateBooking).toHaveBeenCalled();
    });


});

describe("aviailableTimesReducer", () => {
    it("should handle setAvailableTimes action type", () => {
        const initialState = {
            date: "",
            availableTimes: [],
        };
        const action = {
            type: "setAvailableTimes",
            payload: { date: "2023-01-01", availableTimes: ["10:00", "11:00"] },
        };
        const expectedState = {
                date: '2023-01-01',
                availableTimes: ['10:00', '11:00'],
            };
        const resultState = availableTimesReducer(initialState, action);
        expect(resultState).toEqual(expectedState);
    });

    it("should throw an error for an unknown action type", () => {
        const initialState = {
            date: "",
            availableTimes: [],
        };
        const action = {
            type: "unknown",
            payload: { date: "2023-01-01", availableTimes: ["10:00", "11:00"] },
        };
        expect(() => availableTimesReducer(initialState, action)).toThrow(
            "Unhandled action type: unknown"
        );
    });
});


