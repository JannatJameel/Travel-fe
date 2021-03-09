import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const FlightList = () => {
  const airports = useSelector((state) => state.flight.airports);
  const departureFlights = useSelector(
    (state) => state.flight.departureFlights
  );
  const returnFlights = useSelector((state) => state.flight.returnFlights);

  const departureFlightsDet = departureFlights.map((flight) => ({
    ...flight,
    departureAirport: airports.find(
      (airport) => airport.id === flight.departureAirportId
    ).name,
    arrivalAirport: airports.find(
      (airport) => airport.id === flight.arrivalAirportId
    ).name,
  }));

  let returnFlightsDet = [];
  if (returnFlights.length > 0) {
    returnFlightsDet = returnFlights.map((flight) => ({
      ...flight,
      departureAirport: airports.find(
        (airport) => airport.id === flight.departureAirportId
      ).name,
      arrivalAirport: airports.find(
        (airport) => airport.id === flight.arrivalAirportId
      ).name,
    }));
  }

  return (
    <div>
      <h1>Departure Flights</h1>
      {departureFlightsDet.map((flight) => (
        <FlightCard flight={flight} key={flight.id} />
      ))}
      {returnFlights.length > 0 && <h1>Return Flights</h1>}
      {returnFlights.length > 0 &&
        returnFlightsDet.map((flight) => (
          <FlightCard flight={flight} key={flight.id} />
        ))}
    </div>
  );
};

export default FlightList;
