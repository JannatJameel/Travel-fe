import { useDispatch, useSelector } from "react-redux";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  // const user = useSelector((state) => state.authReducer.user);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Time Travellers
          </Typography>
          <Button color="inherit" href="/signin">
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
