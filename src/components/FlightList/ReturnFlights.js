import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Components
import FlightCard from "./FlightCard";

const ReturnFlights = () => {
  const history = useHistory();
  const returnFlights = useSelector((state) => state.flight.returnFlights);
  const bookings = useSelector((state) => state.booking.bookings);

  if (returnFlights.length === 0) history.replace("/booking");

  const minTime =
    Date.parse([bookings[0].arrivalDate, bookings[0].arrivalTime].join(" ")) +
    7200000;

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
