import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const DepartureFlights = ({ flightTime, airline, price }) => {
  console.log("Teeessst", flightTime, airline, price);
  const departureFlights = useSelector(
    (state) => state.flight.departureFlights
  );

  const selectedAirlines = [];
  Object.keys(airline).map((key, i) => {
    if (airline[key] === true) selectedAirlines.push(key);
  });

  let availableFlights = [];

  const flightClass = localStorage.getItem("class");

  flightClass === "economy"
    ? (availableFlights = departureFlights.filter(
        (flight) =>
          flight.priceEconomy > price[0] && flight.priceEconomy < price[1]
      ))
    : (availableFlights = departureFlights.filter(
        (flight) =>
          flight.priceBusiness > price[0] && flight.priceBusiness < price[1]
      ));

  if (
    flightTime.departureTime.length > 0 &&
    flightTime.arrivalTime.length > 0
  ) {
    availableFlights = departureFlights.filter(
      (flight) =>
        flight.departureTime === flightTime.departureTime &&
        flight.arrivalTime === flightTime.arrivalTime
    );
  } else {
    if (flightTime.departureTime.length > 0)
      availableFlights = departureFlights.filter(
        (flight) => flight.departureTime === flightTime.departureTime
      );
    if (flightTime.arrivalTime.length > 0)
      availableFlights = departureFlights.filter(
        (flight) => flight.arrivalTime === flightTime.arrivalTime
      );
  }

  if (selectedAirlines.length > 0) {
    availableFlights = departureFlights.filter((flight) =>
      selectedAirlines.includes(flight.airline.name)
    );
  }

  return (
    <div>
      <h2>Departure Flights</h2>
      {availableFlights.map((flight) => (
        <FlightCard
          flight={flight}
          roundTrip={false}
          isReturnFlight={false}
          key={flight.id}
        />
      ))}
    </div>
  );
};

export default DepartureFlights;
