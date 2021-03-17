import { useSelector } from "react-redux";
// Styling
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
  button: {
    marginLeft: "50%",
    marginTop: "2%",
  },
}));

const UserDetails = ({ setEdit }) => {
  const classes = useStyles();
  const profile = useSelector((state) => state.user.profile);

  return (
    <div>
      <div>
        <TextField
          id="first-name"
          label="First Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={profile.firstName}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="last-name"
          label="Last Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={profile.lastName}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="username"
          label="Username"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={profile.username}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={profile.email}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Button
        onClick={() => setEdit(true)}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Edit
      </Button>
    </div>
  );
};

export default UserDetails;
