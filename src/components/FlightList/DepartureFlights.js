import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const DepartureFlights = () => {
  const departureFlights = useSelector(
    (state) => state.flight.departureFlights
  );
  return (
    <div>
      <h2>Departure Flights</h2>
      {departureFlights.map((flight) => (
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
