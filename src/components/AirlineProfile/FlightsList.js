import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const FlightsList = () => {
  const airlineFlights = useSelector((state) => state.flight.airlineFlights);

  return (
    <div>
      {airlineFlights.map((flight) => (
        <FlightCard flight={flight} />
      ))}
    </div>
  );
};

export default FlightsList;
