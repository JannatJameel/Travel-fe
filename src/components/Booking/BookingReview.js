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
  const flightClass = localStorage.getItem("class");
  
  const count = [];
  while (count.length < passengers) count.push(`${count.length + 1}`);

  let price = 0;
  flightClass === "economy"
    ? (price = bookings[0].priceEconomy)
    : (price = bookings[0].priceBusiness);

  let total = 0;
  bookings.length === 2
    ? (total = 2 * price * passengers)
    : (total = price * passengers);

  const travellers = [];
  count.map((traveller) =>
    bookings.length === 2
      ? travellers.push({
          name: `Traveller ${traveller}`,
          departure: `${bookings[0].departureAirport["location"]} - ${bookings[0].arrivalAirport["location"]}`,
          return: `${bookings[1].departureAirport["location"]} - ${bookings[1].arrivalAirport["location"]}`,
          price: `BD ${price * 2}`,

        })
      : travellers.push({
          name: `Traveller ${traveller}`,
          departure: `${bookings[0].departureAirport["location"]} - ${bookings[0].arrivalAirport["location"]}`,
          price: `BD ${price}`,
        })
  );
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
            BD {price * passengers}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default BookingReview;
