import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styling
import Button from "@material-ui/core/Button";
// Components
import FlightCard from "./FlightCard";
import CheckoutDialog from "./CheckoutDialog";

const FlightReview = () => {
  const history = useHistory();
  const bookings = useSelector((state) => state.booking.bookings);
  const token = localStorage.getItem("myToken");

  console.log("token test", token);

  return (
    <>
      <h1>Review your trip</h1>
      {bookings.map((flight) => (
        <FlightCard flight={flight} key={flight} />
      ))}
      {token === null ? (
        <CheckoutDialog />
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push("/checkout")}
        >
          Checkout
        </Button>
      )}
    </>
  );
};

export default FlightReview;
