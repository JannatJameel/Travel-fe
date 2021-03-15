import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../store/actions/authActions";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   flexWrap: "wrap",
  // },
  textField: {
    marginLeft: "40%",
    width: "40ch",
  },
  button: {
    marginLeft: "50%",
    marginTop: "2%",
  },
}));

const UserForm = ({ setEdit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [userProfile, setuserProfile] = useState(profile);

  const handleChange = (event) =>
    setuserProfile({ ...userProfile, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    dispatch(updateProfile(userProfile));
    setEdit(false);
  };

  return (
    <div>
      <div>
        <TextField
          id="first-name"
          label="First Name"
          name="firstName"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={userProfile.firstName}
          onChange={handleChange}
        />
        <TextField
          id="last-name"
          label="Last Name"
          name="lastName"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={userProfile.lastName}
          onChange={handleChange}
        />
        <TextField
          id="username"
          label="Username"
          name="username"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={userProfile.username}
          onChange={handleChange}
        />
        <TextField
          id="email"
          label="Email"
          name="email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={userProfile.email}
          onChange={handleChange}
        />
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Edit
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => setEdit(false)}
      >
        Cancel
      </Button>
    </div>
  );
};

export default UserForm;
