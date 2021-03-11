import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const ReturnFlights = () => {
  const returnFlights = useSelector((state) => state.flight.returnFlights);
  console.log("Test reutrn flights", returnFlights);
  const bookings = useSelector((state) => state.booking.bookings);
  console.log("Test booking", bookings);
  const minTime =
    Date.parse([bookings[0].arrivalDate, bookings[0].arrivalTime].join(" ")) +
    7200000;

  console.log("Test min Time", minTime);

  const availableFlights = returnFlights.filter(
    (flight) =>
      Date.parse([flight.departureDate, flight.departureTime].join(" ")) >=
      minTime
  );
  console.log(
    "Test return time",
    Date.parse(
      [
        availableFlights[0].departureDate,
        availableFlights[0].departureTime,
      ].join(" ")
    )
  );
  console.log("Test availble flight", availableFlights);

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
