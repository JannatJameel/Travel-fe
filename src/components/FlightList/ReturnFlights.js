import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const ReturnFlights = () => {
  const returnFlights = useSelector((state) => state.flight.returnFlights);
  const bookings = useSelector((state) => state.booking.bookings);
  const minTime =
    Date.parse([bookings.arrivalDate, bookings.arrivalTime].join(" ")) + 7200;

  const availableFlights = returnFlights.filter(
    (flight) =>
      Date.parse([flight.departureDate, flight.departureTime].join(" ")) >=
      minTime
  );

  return (
    <div>
      <h2>Return Flights</h2>
      {availableFlights.map((flight) => (
        <FlightCard flight={flight} isReturnFlight={true} key={flight.id} />
      ))}
    </div>
  );
};

export default ReturnFlights;

// Hellooo
