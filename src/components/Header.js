import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MaerskIcon from "../assets/maersk.png";
import MaerskIcon2 from "../assets/maersk-logo.png";
import { Typography, useMediaQuery } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import {useSelector, useDispatch } from "react-redux";
import { addsearchtab } from "../actions/allActions";

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
  con1: {
    width: "10%",
  },
  con2: {
    width: "75%",
    fontSize: "2.5vh",
    textAlign: "center",
  },
  con3: {
    width: "10%",
  },
  con4: {
    width: "5%",
  },
  para: {
    // margin:'.2vh',
    fontSize: "1.7vh",
  },
  con1logo: {
    flexGrow: 1,
    marginLeft: "-.5vw",
    marginTop: ".7vh",
  },
  btn1: {
    background: "#FFFFFF",
    opacity: "90%",
    fontSize: ".7vw",
    border: ".1vh solid #00b6d3",
    marginLeft: "-1vh",
  },
  btn2: {
    background: "#FFFFFF",
    opacity: "90%",
    fontSize: ".7vw",
    border: ".1vh solid #00b6d3",
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: "1vh",
    marginBottom: "1vh",
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tabsReducer.tabs);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const addnewtab =() => {
    tabs.length<10 ?
    dispatch(addsearchtab()) :
    window.alert("You can't open more than this much tabs. Please close one or more tabs to open a new one.")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#00b6d3" }}>
        <Toolbar>
          {isSmall ? (
            <>
              <div className={classes.con1}>
                <div className={classes.con1logo}>
                  <img
                    src={MaerskIcon2}
                    alt="Maersk.jpg"
                    height="40vh"
                    width="30vh"
                  />
                </div>
              </div>
              <div className={classes.con2}>
                <b>
                  <p>GEOGRAPHY MASTER DATA</p>
                </b>
              </div>
              <div style={{ width: "15%" }}>
                <Button
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </Button>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>John Doe</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <div className={classes.con1}>
                <div className={classes.con1logo}>
                  <img
                    src={MaerskIcon}
                    alt="Maersk.jpg"
                    height="40%"
                    width="100%"
                  />
                </div>
                <div style={{ marginBottom: ".8vh", textAlign: "left" }}>
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.btn1}
                    onClick={addnewtab}
                  >
                    <b>Search</b>
                  </Button>
                </div>
              </div>
              <div className={classes.con2}>
                <b>
                  <p>GEOGRAPHY MASTER DATA</p>
                </b>
              </div>
              <div className={classes.con3}>
                <Typography className={classes.para}>John Doe</Typography>
                <Typography className={classes.para}>
                  johndoe@maersk.com
                </Typography>
                <Typography className={classes.para}>Roles</Typography>
              </div>
              <div className={classes.con4}>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.btn2}
                >
                  <b>Logout</b>
                </Button>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
