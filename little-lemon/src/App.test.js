import { render, screen } from "@testing-library/react";
import BookingForm from "./components/reservation/bookingForm/BookingForm";
import availableTimesReducer from "./components/reservation/reducer/availableTimesReducer";
import fakeAPI from "./utility/fakeAPI";



describe("Booking Form with Initial State", () => {
    const mockCreateBooking = jest.fn();
    const mockSetReservation = jest.fn();
    const availableTimes = { date:"", availableTimes: [] }; // Example available times
    const reservation = { date: "",
    time: "",
    guests: 2,
    occasion: "",
    confirmed: false, };
    beforeEach(() =>{
        render(
            <BookingForm
                createBooking={mockCreateBooking}
                setReservation={mockSetReservation}
                availableTimes={availableTimes}
                reservation={reservation}
            />
        );
    })


    test("renders the form with inputs and a submit button and Create Booking is called when button clicked", async () => {
        expect(screen.getByLabelText("Available Times")).toBeInTheDocument();
        expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
        expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument();
        submitButton.click();
        expect(mockCreateBooking).toHaveBeenCalled();
    });

    test("input form fields should be disabled if no time is selected", () => {
        const guestsInput = screen.getByLabelText("Number of Guests");
        const occasionInput = screen.getByLabelText("Occasion");
        const timeInput = screen.getByLabelText("Available Times");
        expect(guestsInput).toBeDisabled();
        expect(occasionInput).toBeDisabled();
        expect (timeInput).toBeDisabled();
    });
});


describe("Booking Form with Selected Date", () => {
    const mockCreateBooking = jest.fn();
    const mockSetReservation = jest.fn();
    const availableTimes = { date:"2022-03-01", availableTimes: ['13:00', '13:30'] }; // Example available times
    const reservation = { date: "",
    time: "",
    guests: 2,
    occasion: "",
    confirmed: false, };
    beforeEach(() =>{
        render(
            <BookingForm
                createBooking={mockCreateBooking}
                setReservation={mockSetReservation}
                availableTimes={availableTimes}
                reservation={reservation}
            />
        );
    })


    test("renders the form with inputs and a submit button and Create Booking is called when button clicked", async () => {
        expect(screen.getByLabelText("Available Times")).toBeInTheDocument();
        expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
        expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument();
        submitButton.click();
        expect(mockCreateBooking).toHaveBeenCalled();
    });

    test("time input form fields should be enabled", () => {
        const guestsInput = screen.getByLabelText("Number of Guests");
        const occasionInput = screen.getByLabelText("Occasion");
        const timeInput = screen.getByLabelText("Available Times");
        expect(guestsInput).toBeDisabled();
        expect(occasionInput).toBeDisabled();
        expect(timeInput).toBeEnabled();
    });
});

describe("Booking Form with Selected Date and Time", () => {
    const mockCreateBooking = jest.fn();
    const mockSetReservation = jest.fn();
    const availableTimes = { date:"2022-03-01", availableTimes: ['13:00', '13:30'] }; // Example available times
    const reservation = { date: "",
    time: "13:00",
    guests: 2,
    occasion: "",
    confirmed: false, };
    beforeEach(() =>{
        render(
            <BookingForm
                createBooking={mockCreateBooking}
                setReservation={mockSetReservation}
                availableTimes={availableTimes}
                reservation={reservation}
            />
        );
    })


    test("renders the form with inputs and a submit button and Create Booking is called when button clicked", async () => {
        expect(screen.getByLabelText("Available Times")).toBeInTheDocument();
        expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
        expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument();
        submitButton.click();
        expect(mockCreateBooking).toHaveBeenCalled();
    });

    test("time input form fields should be enabled", () => {
        const guestsInput = screen.getByLabelText("Number of Guests");
        const occasionInput = screen.getByLabelText("Occasion");
        const timeInput = screen.getByLabelText("Available Times");
        expect(guestsInput).toBeEnabled();
        expect(occasionInput).toBeEnabled();
        expect(timeInput).toBeEnabled();
    });
});




jest.mock("./utility/fakeAPI", () => ({
    fetchAPI: jest.fn(),
  }));

describe("Fetch and Dispatch Avaialble Times", () => {

      it("fetches available times for today's date and updates state via reducer", async () => {
        // Define today's date and mock times
        const today = new Date(); // Format as YYYY-MM-DD
        const mockTimes = ["10:00", "11:00"];

        // Mock the API call to return the mock times
        fakeAPI.fetchAPI.mockResolvedValue(mockTimes);

        // Simulate fetching times for today's date
        const result = await fakeAPI.fetchAPI(today);

        // Check that the mocked API was called correctly
        expect(fakeAPI.fetchAPI).toHaveBeenCalledWith(today);
        expect(result).toEqual(mockTimes);

        // Now test dispatching the result to the reducer
        const initialState = {
          date: "",
          availableTimes: [],
        };

        const action = {
          type: "setAvailableTimes",
          payload: { date: today, availableTimes: mockTimes },
        }
        const expectedState = {
          date: today,
          availableTimes: mockTimes,
        };

        const newState = availableTimesReducer(initialState, action);

        // Check that the state was updated correctly
        expect(newState).toEqual(expectedState);
      });
})


describe("aviailableTimesReducer", () => {

    const mockAvailableTimes = { availableTimes: ["10:00", "11:00"] };

    it("should handle setAvailableTimes action type", () => {
        const initialState = {
            date: "",
            availableTimes: [],
        };
        const action = {
            type: "setAvailableTimes",
            payload: { date: "2023-01-01", availableTimes: mockAvailableTimes.availableTimes },
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
            payload: { date: "2023-01-01", availableTimes: mockAvailableTimes.availableTimes },
        };
        expect(() => availableTimesReducer(initialState, action)).toThrow(
            "Unhandled action type: unknown"
        );
    });
});


