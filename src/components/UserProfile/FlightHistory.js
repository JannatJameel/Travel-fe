import { useSelector } from "react-redux";
// Components
import FlightCard from "../Booking/FlightCard";

const FlightHistory = () => {
  const history = useSelector((state) => state.user.history);

  const flights = [];
  history.forEach((booking) =>
    booking.flights.forEach((flight) => flights.push(flight))
  );

  return (
    <div>
      {flights.map((flight) => (
        <FlightCard flight={flight} ket={flight.id} />
      ))}
    </div>
  );
};

export default FlightHistory;
