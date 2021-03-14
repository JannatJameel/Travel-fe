import { useSelector } from "react-redux";
// Components
import FlightCard from "./FlightCard";
import CheckoutDialog from "./CheckoutDialog";

const FlightReview = () => {
  const bookings = useSelector((state) => state.booking.bookings);

  return (
    <>
      <h1>Review your trip</h1>
      {bookings.map((flight) => (
        <FlightCard flight={flight} key={flight} />
      ))}
      <CheckoutDialog />
    </>
  );
};

export default FlightReview;
