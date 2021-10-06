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
import { useDispatch, useSelector } from "react-redux";
import { setinsidetab } from "../actions/allActions";

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

const tabs = [
  "City",
  "Alternate Name",
  "Alternate Code",
  "Parent",
  "BDA",
]
  

function DetailedView() {
  const tnumber = useSelector((state) => state.tabsReducer.value);
  const val = useSelector((state) => state.tabDataReducer.data[tnumber].id);
  const data = useSelector((state) => state.tabDataReducer.data[tnumber].res);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    dispatch(setinsidetab({id:tnumber,tabnumber:newValue}));
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
            value={val}
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
            {val===0?
               <>
                 <TableHead>
                   <TableRow>
                     <TableCell align="center" className={classes.cell}>City Name</TableCell>
                     <TableCell align="center" className={classes.cell}>Active Flag</TableCell>
                     <TableCell align="center" className={classes.cell}>Valid From</TableCell>
                     <TableCell align="center" className={classes.cell}>Valid To</TableCell>
                     <TableCell align="center" className={classes.cell}>Latitude/Longitude</TableCell>
                     <TableCell align="center" className={classes.cell}>Time Zone</TableCell>
                     <TableCell align="center" className={classes.cell}>Daylight Saving Time</TableCell>
                     <TableCell align="center" className={classes.cell}>Description</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {data.city.map((city) => (
                     <TableRow key={city.name}>
                       <TableCell component="th" scope="row" align="center" className={classes.cell}>
                         {city.name}
                       </TableCell>
                       <TableCell align="center" className={classes.cell}>{city.validfrom}</TableCell>
                       <TableCell align="center" className={classes.cell}>{city.validto}</TableCell>
                       <TableCell align="center" className={classes.cell}>{city.activeflag}</TableCell>
                       <TableCell align="center" className={classes.cell}>{city.latlong}</TableCell>
                       <TableCell align="center" className={classes.cell}>{city.timezone}</TableCell>
                       <TableCell align="center" className={classes.cell}>{city.dst}</TableCell>
                       <TableCell align="center" className={classes.cell}>{city.desc}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </> :
               val ===1 ?
               <>
                 <TableHead>
                   <TableRow>
                     <TableCell align="center" className={classes.cell}>Name</TableCell>
                     <TableCell align="center" className={classes.cell}>Description</TableCell>
                     <TableCell align="center" className={classes.cell}>Status</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {data.altname.map((alt) => (
                     <TableRow key={alt.name}>
                       <TableCell component="th" scope="row" align="center" className={classes.cell}>
                         {alt.name}
                       </TableCell>
                       <TableCell align="center" className={classes.cell}>{alt.desc}</TableCell>
                       <TableCell align="center" className={classes.cell}>{alt.status}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </> :
               val === 2 ?
               <>
                 <TableHead>
                   <TableRow>
                     <TableCell align="center" className={classes.cell}>Code Type</TableCell>
                     <TableCell align="center" className={classes.cell}>Code</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {data.altcode.map((alt) => (
                     <TableRow key={alt.ctype}>
                       <TableCell component="th" scope="row" align="center" className={classes.cell}>
                         {alt.ctype}
                       </TableCell>
                       <TableCell align="center" className={classes.cell}>{alt.code}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </> :
               val === 3 ?
               <>
                  <TableHead>
                   <TableRow>
                     <TableCell align="center" className={classes.cell}>Parent Name</TableCell>
                     <TableCell align="center" className={classes.cell}>Parent Type</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {data.parent.map((parent) => (
                     <TableRow key={parent.pname}>
                       <TableCell component="th" scope="row" align="center" className={classes.cell}>
                         {parent.pname}
                       </TableCell>
                       <TableCell align="center" className={classes.cell}>{parent.ptype}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </> :
               <>
                  <TableHead>
                   <TableRow>
                     <TableCell align="center" className={classes.cell}>Name</TableCell>
                     <TableCell align="center" className={classes.cell}>Type</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {data.bda.map((bda) => (
                     <TableRow key={bda.name}>
                       <TableCell component="th" scope="row" align="center" className={classes.cell}>
                         {bda.name}
                       </TableCell>
                       <TableCell align="center" className={classes.cell}>{bda.type}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </>
            }
      </Table>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default DetailedView;
