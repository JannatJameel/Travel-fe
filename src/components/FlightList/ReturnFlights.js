import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Components
import FlightCard from "./FlightCard";

const ReturnFlights = ({ flightTime, airline, price }) => {
  const history = useHistory();
  const returnFlights = useSelector((state) => state.flight.returnFlights);
  const bookings = useSelector((state) => state.booking.bookings);
  console.log("return flights check", returnFlights);
  if (returnFlights.length === 0) history.replace("/booking");

  const minTime =
    Date.parse([bookings[0].arrivalDate, bookings[0].arrivalTime].join(" ")) +
    7200000;

  const availableFlights = returnFlights.filter(
    (flight) =>
      Date.parse([flight.departureDate, flight.departureTime].join(" ")) >=
      minTime
  );

  const selectedAirlines = [];
  Object.keys(airline).map((key, i) => {
    if (airline[key] === true) selectedAirlines.push(key);
  });

  let filteredFlights = [];

  const flightClass = localStorage.getItem("class");

  flightClass === "economy"
    ? (filteredFlights = availableFlights.filter(
        (flight) =>
          flight.priceEconomy > price[0] && flight.priceEconomy < price[1]
      ))
    : (filteredFlights = availableFlights.filter(
        (flight) =>
          flight.priceBusiness > price[0] && flight.priceBusiness < price[1]
      ));

  if (
    flightTime.departureTime.length > 0 &&
    flightTime.arrivalTime.length > 0
  ) {
    filteredFlights = availableFlights.filter(
      (flight) =>
        flight.departureTime === flightTime.departureTime &&
        flight.arrivalTime === flightTime.arrivalTime
    );
  } else {
    if (flightTime.departureTime.length > 0)
      filteredFlights = availableFlights.filter(
        (flight) => flight.departureTime === flightTime.departureTime
      );
    if (flightTime.arrivalTime.length > 0)
      filteredFlights = availableFlights.filter(
        (flight) => flight.arrivalTime === flightTime.arrivalTime
      );
  }

  if (selectedAirlines.length > 0) {
    filteredFlights = availableFlights.filter((flight) =>
      selectedAirlines.includes(flight.airline.name)
    );
  }

  return (
    <div>
      <h2>Return Flights</h2>
      {filteredFlights.map((flight) => (
        <FlightCard flight={flight} isReturnFlight={true} key={flight.id} />
      ))}
    </div>
  );
};

export default ReturnFlights;
