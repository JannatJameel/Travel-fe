import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signout,
  fetchProfile,
  userHistory,
} from "../../store/actions/authActions";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { FaUserAstronaut } from "react-icons/fa";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
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
    dispatch(userHistory());
    history.push("/my-profile");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title}>
              Time Travellers
            </Typography>
          </Link>
          {user ? (
            <>
              {!user.isAirline && (
                <IconButton onClick={handleProfile}>
                  <FaUserAstronaut color="#fff" size="0.9em" />
                </IconButton>
              )}
              <Box ml={145}>
                <Button color="inherit" onClick={handleSignout}>
                  Sign out
                </Button>
              </Box>
            </>
          ) : (
            <Box ml={147}>
              <Button color="inherit" href="/signin">
                Sign in
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
