import DepartureDate from "./DepartureDate";
import Travelers from "./Travelers";
import ReturnDate from "./ReturnDate";
import FlyingClass from "./FlyingClass";
import DepartureLocation from "./DepartureLocation";
import ReturnLocation from "./ReturnLocation";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <Container maxWidth="md">
      <div class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Flights</h5>

          <Button color="primary">Roundtrip</Button>
          <Button color="primary">One-way</Button>

          <br />
          <DepartureLocation />
          <ReturnLocation />

          <br />
          <Travelers />
          <FlyingClass />

          <br />
          <DepartureDate />
          <ReturnDate />

          <Button variant="contained" color="primary">
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
