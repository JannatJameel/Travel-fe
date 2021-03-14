import { useSelector } from "react-redux";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const BookingReview = () => {
  const classes = useStyles();
  const bookings = useSelector((state) => state.booking.bookings);
  const passengers = localStorage.getItem("passengers");
  const count = [];
  while (count.length < passengers) count.push(`${count.length + 1}`);

  const travellers = [];
  count.map((traveller) =>
    bookings.length === 2
      ? travellers.push({
          name: `Traveller ${traveller}`,
          departure: `${bookings[0].departureAirport["location"]} - ${bookings[0].arrivalAirport["location"]}`,
          return: `${bookings[1].departureAirport["location"]} - ${bookings[1].arrivalAirport["location"]}`,
          price: `BD ${bookings[0].price + bookings[1].price}`,
        })
      : travellers.push({
          name: `Traveller ${traveller}`,
          departure: `${bookings[0].departureAirport["location"]} - ${bookings[0].arrivalAirport["location"]}`,
          price: `BD ${bookings[0].price}`,
        })
  );
  let total = 0;
  bookings.length === 2
    ? (total = (bookings[0].price + bookings[1].price) * passengers)
    : (total = bookings[0].price * passengers);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Trip Summary
      </Typography>
      <List disablePadding>
        {travellers.map((traveller) => (
          <ListItem className={classes.listItem} key={traveller.name}>
            <ListItemText primary={traveller.name} />
            <ListItemText secondary={traveller.departure} />
            <ListItemText secondary={traveller.return} />
            <Typography variant="body2">{traveller.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Trip Total" />
          <Typography variant="subtitle1" className={classes.total}>
            BD {total}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default BookingReview;
