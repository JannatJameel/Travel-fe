import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";

const ReturnFlights = () => {
  const returnFlights = useSelector((state) => state.flight.returnFlights);

  return (
    <div>
      <h2>Return Flights</h2>
      {returnFlights.map((flight) => (
        <FlightCard flight={flight} roundTrip={true} key={flight.id} />
      ))}
    </div>
  );
};

export default ReturnFlights;
