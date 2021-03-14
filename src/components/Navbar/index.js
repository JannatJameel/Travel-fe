import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout, fetchProfile } from "../../store/actions/authActions";
import { FaUserAstronaut } from "react-icons/fa";
//Styling
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(signout());
    history.replace("/");
  };

  const handleProfile = () => {
    dispatch(fetchProfile());
    history.push("/my-profile");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Time Travellers
          </Typography>
          {user ? (
            <>
              <IconButton onClick={handleProfile}>
                <FaUserAstronaut color="#fff" size="1em" />
              </IconButton>

              <Button color="inherit" onClick={handleSignout}>
                Sign out
              </Button>
            </>
          ) : (
            <Button color="inherit" href="/signin">
              Sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
