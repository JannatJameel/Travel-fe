import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../store/actions/authActions";

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

const UserForm = ({ setEdit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [userProfile, setuserProfile] = useState(profile);

  const handleChange = (event) =>
    setuserProfile({ ...userProfile, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProfile(userProfile));
    setEdit(false);
  };

  console.log(userProfile);
  return (
    <div>
      {/* <div>
        <TextField
          id="first-name"
          label="First Name"
          defaultValue={test}
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
      <Button className={classes.button} variant="contained" color="primary">
        Edit
      </Button> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            value={userProfile.firstName}
            name="firstName"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            value={userProfile.lastName}
            name="firstName"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={userProfile.username}
            name="username"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={userProfile.email}
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Edit
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => setEdit(false)}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
