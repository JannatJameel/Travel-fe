import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import FlightCard from "./FlightCard";

const DepartureFlights = () => {
  const history = useHistory();

  const departureFlights = useSelector(
    (state) => state.flight.departureFlights
  );

  if (departureFlights.length === 0) {
    alert("No flights found try another search.");
    history.replace("/");
  }

  const availableFlights = departureFlights.filter(
    (flight) =>
      Date.parse([flight.departureDate, flight.departureTime].join(" ")) >=
      Date.parse(new Date()) + 7200000
  );

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
