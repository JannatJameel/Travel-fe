import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const FlightList = () => {
  const departureFlights = useSelector(
    (state) => state.flight.departureFlights
  );
  const returnFlights = useSelector((state) => state.flight.returnFlights);

  return (
    <div>
      <h2>Departure Flights</h2>
      {departureFlights.map((flight) => (
        <FlightCard flight={flight} key={flight.id} />
      ))}
      {returnFlights.length > 0 && <h2>Return Flights</h2>}
      {returnFlights.length > 0 &&
        returnFlights.map((flight) => (
          <FlightCard flight={flight} key={flight.id} />
        ))}
    </div>
  );
};

export default FlightList;
