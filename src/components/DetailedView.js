import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  tabs: {
    textTransform: "none",
  },
  panel: {
    "& .MuiTab-textColorInherit.Mui-selected": {
      color: "#00b6d3",
    },
  },
  btn: {
    margin: "1vh",
    background: "#FFFFFF",
    fontSize: ".6rem",
    opacity: "90%",
  },
  btn2: {
    margin: "1vh 3vh 1vh 1vh",
    background: "#FFFFFF",
    fontSize: ".6rem",
    opacity: "90%",
  },
  header: {
    display: "flex",
    backgroundColor: "#00b6d3",
    margin: "2vh 0vh",
    width: "100%",
    justifyContent: "flex-end",
  },
  header2: {
    display: "flex",
    backgroundColor: "#00b6d3",
    margin: "1vh 0vh",
    width: "100%",
    justifyContent: "flex-end",
  },
  cell:{
    borderBottom: ".05rem solid #00b6d3",
  },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DetailedView() {
  const [value, setValue] = React.useState(0);
  const [indicate, setIndicate] = React.useState(true);
  const classes = useStyles();
  const [tabs, setTabs] = React.useState([
    "City",
    "Alternate Name",
    "Alternate Code",
    "Parent",
    "BDA",
  ]);

  React.useEffect(() => {
    console.log("inside useEffect");
  }, [indicate]);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    await setIndicate(!indicate);
  };

  return (
    <>
      <div className={classes.header}>
        <Button variant="contained" size="small" className={classes.btn}>
          <b>Edit</b>
        </Button>
        <Button variant="contained" size="small" className={classes.btn}>
          <b>Save</b>
        </Button>
        <Button variant="contained" size="small" className={classes.btn2}>
          <b>History</b>
        </Button>
      </div>
      <div style={{ margin: "3vh" }}>
        <Paper style={{backgroundColor: "#ebeff2",border: ".05rem solid #00b6d3", }}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#00b6d3",
              },
            }}
            className={classes.panel}
            variant="fullWidth"
            scrollButtons="on"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            {tabs.map((name) => (
              <Tab
                label={
                  <>
                    <div>{name}</div>
                  </>
                }
                className={classes.tabs}
              />
            ))}
          </Tabs>
          <div className={classes.header2}>
            <Button variant="contained" size="small" className={classes.btn}>
              <b>Add</b>
            </Button>
            <Button variant="contained" size="small" className={classes.btn}>
              <b>Edit</b>
            </Button>
            <Button variant="contained" size="small" className={classes.btn2}>
              <b>Delete</b>
            </Button>
          </div>
          <div>
          <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.cell}>Dessert (100g serving)</TableCell>
            <TableCell align="center" className={classes.cell}>Calories</TableCell>
            <TableCell align="center" className={classes.cell}>Fat&nbsp;(g)</TableCell>
            <TableCell align="center" className={classes.cell}>Carbs&nbsp;(g)</TableCell>
            <TableCell align="center" className={classes.cell}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="center" className={classes.cell}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={classes.cell}>{row.calories}</TableCell>
              <TableCell align="center" className={classes.cell}>{row.fat}</TableCell>
              <TableCell align="center" className={classes.cell}>{row.carbs}</TableCell>
              <TableCell align="center" className={classes.cell}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default DetailedView;
