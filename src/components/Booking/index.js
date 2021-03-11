import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../store/actions/bookingActions";
// Styling
import Button from "@material-ui/core/Button";

const Booking = () => {
  const dispatch = useDispatch();

  const bookings = useSelector((state) => state.booking.bookings);

  const handleCheckout = () => {
    const cart = [
      {
        flightId: bookings[0].id,
        passengers: localStorage.getItem("passengers"),
      },
      {
        flightId: bookings[1].id,
        passengers: localStorage.getItem("passengers"),
      },
    ];
    dispatch(checkout(cart));
  };

  return (
    <>
      <h1>This is a test page</h1>
      <Button onClick={handleCheckout} variant="contained" color="primary">
        Check out
      </Button>
    </>
  );
};

export default Booking;
