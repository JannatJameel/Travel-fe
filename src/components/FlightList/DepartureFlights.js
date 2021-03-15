import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import FlightCard from "./FlightCard";

const DepartureFlights = () => {
  const history = useHistory();

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
