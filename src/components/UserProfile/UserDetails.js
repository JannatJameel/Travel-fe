import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  textField: {
    marginLeft: "40%",
    width: "40ch",
  },
}));

const UserDetails = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <TextField
          id="first-name"
          label="First Name"
          defaultValue="Jannat"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
        <TextField
          id="last-name"
          label="Last Name"
          defaultValue="Jameel"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
        <TextField
          id="username"
          label="Username"
          defaultValue="Jannat"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
        <TextField
          id="email"
          label="Email"
          defaultValue="jannat@gmail.com"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
      </div>
      <div style={{ marginLeft: "50%", marginTop: "2%" }}>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
