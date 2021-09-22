import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from "react-redux";
import { addresult, setid, setres } from "../actions/allActions";

const useStyles = makeStyles((theme) => ({
  tabs: {
    textTransform: "none",
    borderBottom: ".05rem solid #00b6d3",
    wordWrap:"break-word"
  },
  panel: {
    "& .MuiTab-textColorInherit.Mui-selected": {
      color: "#ffffff",
      backgroundColor: "#00b6d3",
    },
  },
  heading: {
    textIndent: "1.5vw",
    marginTop: "4vh",
    paddingBottom: "1vh",
    fontWeight: 500,
    borderBottom: ".05rem solid #00b6d3",
  },
  headingchild: {
    alignItems: "start",
    textIndent: "4vw",
  },
  root: {
    "& > *": {
      margin: theme.spacing(2, 6),
      width: "25ch",
      textAlign: "none",
    },
  },
  btn: {
    textAlign: "center",
    marginTop: "2vh",
    marginBottom :"2vh",
  },
  text: {
    fontSize: "1vh",
  },
  paper: {
    flexGrow: 1,
    height: "27vh",
    backgroundColor: "#ebeff2",
    overflowY: "scroll",
    border: ".05rem solid #00b6d3",
    // textAlign:"center",
  },
  paper2:{
    flexGrow:1,
    backgroundColor:"#ebeff2",
    border: ".05rem solid #00b6d3",
    marginTop:"2vh"
  }
}));

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 100 },
  {
    id: 'code',
    label: 'Code',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'parentname',
    label: 'Parent\u00a0Name',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'parenttype',
    label: 'Parent\u00a0Type',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function SearchView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tabnumber = useSelector((state) => state.tabsReducer.value);
  const rowdata = useSelector((state) => state.tabDataReducer.data[tabnumber][6]);
  const val = useSelector((state) => state.tabDataReducer.data[tabnumber][7].id);
  const res = useSelector((state) => state.tabDataReducer.data[tabnumber][7].res);
  const formdata = useSelector((state) => state.tabDataReducer.data[tabnumber]);
  const tabs = useSelector((state) => state.tabsReducer.tabs);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = async (event, newValue) => {
    dispatch(setid({id:tabnumber,tabno: newValue}));
  };

  const [status, setStatus] = React.useState([
    { key: "Active", value: "A" },
    { key: "Inactive", value: "I" },
  ]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "13%" }}>
        <Paper square style={{ height: "83vh", backgroundColor: "#ebeff2" }}>
          <Tabs 
            value={val}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#00b6d3",
              },
            }}
            className={classes.panel}
            orientation="vertical"
            variant="scrollable"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <div className={classes.heading}>Geography</div>
            <Tab classes={{ wrapper: classes.headingchild }} label={<><div>City</div></>} className={classes.tabs}/>
            <Tab classes={{ wrapper: classes.headingchild }} label={<><div style={{ textAlign: "left" }}>State</div></>} className={classes.tabs}/>
            <Tab classes={{ wrapper: classes.headingchild }} label={<><div>Country</div></>} className={classes.tabs}/>
            <Tab classes={{ wrapper: classes.headingchild }} label={<><div>Continent</div></>} className={classes.tabs}/>
            <Tab classes={{ wrapper: classes.headingchild }} label={<><div>Postal Code</div></>} className={classes.tabs}/>
            <Tab classes={{ wrapper: classes.headingchild }} label={<><div>BDA</div></>} className={classes.tabs}/>
          </Tabs>
        </Paper>
      </div>
      <div style={{ width: "87%", margin: "1.5vh 1.5vh 0vh 1.5vh" }}>
        <Paper className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            {val=== 1?
              <>
                <TextField id="standard-basic" label="Name" size="small" defaultValue={formdata[0].name}/>
                <TextField id="standard-basic" label="Alternate Name" size="small" defaultValue={formdata[0].altname} />
                <TextField id="standard-basic" select label="Status" size="small" defaultValue={formdata[0].status}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Code Type" size="small" defaultValue={formdata[0].codetype} />
                <TextField id="standard-basic" label="Code" size="small" defaultValue={formdata[0].code} />
                <TextField id="standard-basic" label="Parent Name" size="small" defaultValue={formdata[0].pname} />
                <TextField id="standard-basic" label="Country" size="small" defaultValue={formdata[0].country} />
              </> :
              val === 2?
              <>
                <TextField id="standard-basic" label="Name" size="small" defaultValue={formdata[1].name} />
                <TextField id="standard-basic" label="Alternate Name" size="small" defaultValue={formdata[1].altname}/>
                <TextField id="standard-basic" select label="Status" size="small" defaultValue={formdata[1].status}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Code Type" size="small" defaultValue={formdata[1].codetype} />
                <TextField id="standard-basic" label="Code" size="small" defaultValue={formdata[1].code}/>
                <TextField id="standard-basic" label="Parent Name" size="small" defaultValue={formdata[1].pname} />
                <TextField id="standard-basic" label="Country" size="small" defaultValue={formdata[1].country} />
              </>  :
              val === 3 ?
              <>
                <TextField id="standard-basic" label="Name" size="small" defaultValue={formdata[2].name}/>
                <TextField id="standard-basic" label="Alternate Name" size="small" defaultValue={formdata[2].altname}/>
                <TextField id="standard-basic" select label="Status" size="small" defaultValue={formdata[2].status}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Time Zone" size="small" defaultValue={formdata[2].tzone} />
                <TextField id="standard-basic" label="Daylight Saving Time" size="small" defaultValue={formdata[2].dst} />
                <TextField id="standard-basic" label="Code Type" size="small" defaultValue={formdata[2].codetype} />
                <TextField id="standard-basic" label="Parent Name" size="small" defaultValue={formdata[2].pname} />
              </> :
              val ===4 ?
              <>
                <TextField id="standard-basic" label="Name" size="small" defaultValue={formdata[3].name}/>
                <TextField id="standard-basic" label="Alternate Name" size="small" defaultValue={formdata[3].altname}/>
                <TextField id="standard-basic" select label="Status" size="small" defaultValue={formdata[3].status}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Code Type" size="small" defaultValue={formdata[3].codetype} />
              </> :
              val ===5 ?
              <>
                <TextField id="standard-basic" label="Name" size="small" defaultValue={formdata[4].name}/>
                <TextField id="standard-basic" select label="Status" size="small" defaultValue={formdata[4].status}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Code Type" size="small" defaultValue={formdata[4].codetype}/>
                <TextField id="standard-basic" label="Code" size="small" defaultValue={formdata[4].code}/>
                <TextField id="standard-basic" label="Parent Name" size="small" defaultValue={formdata[4].parent}/>
                <TextField id="standard-basic" label="Country" size="small" defaultValue={formdata[4].country}/>
                <TextField id="standard-basic" label="City" size="small" defaultValue={formdata[4].city}/>
              </> :
              <>
                 <TextField id="standard-basic" label="Name" size="small" defaultValue={formdata[5].name}/>
                 <TextField id="standard-basic" label="Type" size="small" defaultValue={formdata[5].type}/>
                 <TextField id="standard-basic" label="Code" size="small" defaultValue={formdata[5].code}/>
                 <TextField id="standard-basic" label="Code Type" size="small" defaultValue={formdata[5].codetype}/>
                 <TextField id="standard-basic" label="Location Name" size="small" defaultValue={formdata[5].locname}/>
                 <TextField id="standard-basic" label="Location Type" size="small" defaultValue={formdata[5].loctype}/>
              </>
          }
            
          </form>
          <div className={classes.btn}>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#00b6d3", color: "#ffffff" }}
              onClick={()=>dispatch(setres(tabnumber))}
            >
              <b>Search</b>
            </Button>
          </div>
        </Paper>
        {res?
        <Paper className={classes.paper2} >
          <div style={{margin:"1vh",textIndent:"1vh"}}>Search Result</div>
        <TableContainer style={{maxHeight: '40vh'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,textAlign:"center" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowdata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} 
                onClick={()=>{ tabs.length<10? dispatch(addresult({ id:0 ,res :rowdata[row.id-1] })) :
                       window.alert("You can't open more than this much tabs. Please close one or more tabs to open a new one.")}}>
                      <TableCell key="name" align="center" style={{borderBottom:".05rem solid #00b6d3",textAlign:"center"}}>
                          {row.name}
                      </TableCell>
                      <TableCell key="status" align="center" style={{borderBottom:".05rem solid #00b6d3",textAlign:"center"}}>
                      {row.status}
                      </TableCell>
                      <TableCell key="code" align="center" style={{borderBottom:".05rem solid #00b6d3",textAlign:"center"}}>
                      {row.code}
                      </TableCell>
                      <TableCell key="parentname" align="center" style={{borderBottom:".05rem solid #00b6d3",textAlign:"center"}}>
                      {row.pname}
                      </TableCell>
                      <TableCell key="parenttype" align="center" style={{borderBottom:".05rem solid #00b6d3",textAlign:"center"}}>
                      {row.ptype}
                      </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10]}
        component="div"
        count={rowdata.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{textAlign:"center"}}
      />
        </Paper> :<></>}
      </div>
    </div>
  );
}

export default SearchView;
