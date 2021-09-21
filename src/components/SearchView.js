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
import { useDispatch } from "react-redux";
import { addresult } from "../actions/allActions";

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

function createData(id,name, code, population, size) {
  const density = population / size;
  return { id,name, code, population, size, density };
}

const rows = [
  createData(1,'India', 'IN', 1324171354, 3287263),
  createData(2,'China', 'CN', 1403500365, 9596961),
  createData(3,'Italy', 'IT', 60483973, 301340),
  createData(4,'United States', 'US', 327167434, 9833520),
  createData(5,'Canada', 'CA', 37602103, 9984670),
  createData(6,'Australia', 'AU', 25475400, 7692024),
  createData(7,'Germany', 'DE', 83019200, 357578),
  createData(8,'Ireland', 'IE', 4857000, 70273),
  createData(9,'Mexico', 'MX', 126577691, 1972550),
  createData(10,'Japan', 'JP', 126317000, 377973),
  createData(11,'France', 'FR', 67022000, 640679),
  createData(12,'United Kingdom', 'GB', 67545757, 242495),
  createData(13,'Russia', 'RU', 146793744, 17098246),
  createData(14,'Nigeria', 'NG', 200962417, 923768),
  createData(15,'Brazil', 'BR', 210147125, 8515767),
];

function SearchView() {
  const [value, setValue] = React.useState(1);
  const [indicate, setIndicate] = React.useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    console.log("inside useEffect");
  }, [indicate]);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    setIndicate(!indicate);
  };

  const [status, setStatus] = React.useState([
    { key: "Active", value: "A" },
    { key: "Inactive", value: "I" },
  ]);

  const clickme =(id)=>{
    console.log(id);
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "13%" }}>
        <Paper square style={{ height: "83vh", backgroundColor: "#ebeff2" }}>
          <Tabs 
            value={value}
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
            <TextField id="standard-basic" label="Name" size="small" />
            <TextField id="standard-basic" label="Alternate Code" size="small"/>
            <TextField id="standard-basic" select label="Status" size="small">
              {status.map((stat) => (
                <option key={stat.value} value={stat.value}>
                  {stat.key}
                </option>
              ))}
            </TextField>
            <TextField id="standard-basic" label="Code Type" size="small" />
            <TextField id="standard-basic" label="Code" size="small" />
            <TextField id="standard-basic" label="Parent Name" size="small" />
            <TextField id="standard-basic" label="Country" size="small" />
          </form>
          <div className={classes.btn}>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#00b6d3", color: "#ffffff" }}
            >
              <b>Search</b>
            </Button>
          </div>
        </Paper>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>dispatch(addresult({id:row.id, res: rows[row.id-1]}))}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{borderBottom:".05rem solid #00b6d3",textAlign:"center"}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{textAlign:"center"}}
      />
        </Paper>
      </div>
    </div>
  );
}

export default SearchView;
