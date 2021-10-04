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
import { addresult, setid, setres, updateforms } from "../actions/allActions";
import axios from "axios";

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
  },
  {
    id: 'parentname',
    label: 'Parent\u00a0Name',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'parenttype',
    label: 'Parent\u00a0Type',
    minWidth: 170,
    align: 'right',
  },
];

const status = [
  { key: "Active", value: "A" },
  { key: "Inactive", value: "I" },
];

const codetype = [
  { key: "RKST", value: "1"},
  { key: "RKTS", value: "2"},
];


function SearchView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tabnumber = useSelector((state) => state.tabsReducer.value);
  const tabl = useSelector((state) => state.tabsReducer.tabs);
  const rowdata = useSelector((state) => state.tabDataReducer.data[tabnumber][6]);
  const val = useSelector((state) => state.tabDataReducer.data[tabnumber][7].id);
  const res = useSelector((state) => state.tabDataReducer.data[tabnumber][7].res);
  const formdata = useSelector((state) => state.tabDataReducer.data[tabnumber]);
  const tabs = useSelector((state) => state.tabsReducer.tabs);
  const deltab= useSelector((state) => state.tabsReducer.deltab);
  const flag = useSelector((state)=> state.tabsReducer.indicate);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [tabno, setTabno] = React.useState(tabnumber);
  const [tablen, setTablen] = React.useState(tabl.length);

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

  const getresult = async() =>{
    try {
      var response;
      if (val === 1) {
        response = await axios.get("http://localhost:8080/city");
      } else if (val === 2) {
        response = await axios.get("http://localhost:8080/state", form2);
      } else if (val === 3) {
        response = await axios.get("http://localhost:8080/country", form3);
      } else if (val === 4) {
        response = await axios.get("http://localhost:8080/continent", form4);
      } else if (val === 5) {
        response = await axios.get("http://localhost:8080/postalcode", form5);
      } else {
        response = await axios.get("http://localhost:8080/bda", form6);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  const [form1, setForm1] = React.useState(formdata[0]);
  const [form2, setForm2] = React.useState(formdata[1]);
  const [form3, setForm3] = React.useState(formdata[2]);
  const [form4, setForm4] = React.useState(formdata[3]);
  const [form5, setForm5] = React.useState(formdata[4]);
  const [form6, setForm6] = React.useState(formdata[5]);

  React.useEffect(() => {
    if(tablen <= tabl.length)
       dispatch(updateforms({id: tabno,details:[form1,form2,form3,form4,form5,form6]}));
    else if(tabno!==deltab){
      if(tabno<deltab)
      dispatch(updateforms({id: tabno,details:[form1,form2,form3,form4,form5,form6]}));
      else 
      dispatch(updateforms({id: tabno-1,details:[form1,form2,form3,form4,form5,form6]}));
    }
    setForm1(formdata[0]);
    setForm2(formdata[1]);
    setForm3(formdata[2]);
    setForm4(formdata[3]);
    setForm5(formdata[4]);
    setForm6(formdata[5]);
    setTabno(tabnumber);
    setTablen(tabl.length);
    // eslint-disable-next-line
  },[formdata,flag]);

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
                <TextField id="standard-basic" label="Name" size="small" value={form1.name} onChange={(event) =>{const temp={...form1}; temp.name=event.target.value; setForm1(temp); }} />
                <TextField id="standard-basic" label="Alternate Name" size="small" value={form1.altname} onChange={(event) =>{const temp={...form1}; temp.altname=event.target.value; setForm1(temp); }} />
                <TextField id="standard-basic" select label="Status" size="small" value={form1.status} onChange={(event) =>{const temp={...form1}; temp.status=event.target.value; setForm1(temp); }}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" select label="Code Type" size="small" value={form1.codetype} onChange={(event) =>{const temp={...form1}; temp.codetype=event.target.value; setForm1(temp); }}>
                  {codetype.map((ctype) => (
                    <option key={ctype.value} value={ctype.value}>
                      {ctype.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Code" size="small" value={form1.code} onChange={(event) =>{const temp={...form1}; temp.code=event.target.value; setForm1(temp); }}/>
                <TextField id="standard-basic" label="Parent Name" size="small" value={form1.pname} onChange={(event) =>{const temp={...form1}; temp.pname=event.target.value; setForm1(temp); }}/>
                <TextField id="standard-basic" label="Country" size="small" value={form1.country} onChange={(event) =>{const temp={...form1}; temp.country=event.target.value; setForm1(temp); }}/>
              </> :
              val === 2?
              <>
                <TextField id="standard-basic" label="Name" size="small" value={form2.name} onChange={(event) =>{const temp={...form2}; temp.name=event.target.value; setForm2(temp); }}/>
                <TextField id="standard-basic" label="Alternate Name" size="small" value={form2.altname} onChange={(event) =>{const temp={...form2}; temp.altname=event.target.value; setForm2(temp); }}/>
                <TextField id="standard-basic" select label="Status" size="small" value={form2.status} onChange={(event) =>{const temp={...form2}; temp.status=event.target.value; setForm2(temp); }}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" select label="Code Type" size="small" value={form2.codetype} onChange={(event) =>{const temp={...form2}; temp.codetype=event.target.value; setForm2(temp); }}>
                  {codetype.map((ctype) => (
                    <option key={ctype.value} value={ctype.value}>
                      {ctype.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Code" size="small" value={form2.code} onChange={(event) =>{const temp={...form2}; temp.code=event.target.value; setForm2(temp); }}/>
                <TextField id="standard-basic" label="Parent Name" size="small" value={form2.pname} onChange={(event) =>{const temp={...form2}; temp.pname=event.target.value; setForm2(temp); }}/>
                <TextField id="standard-basic" label="Country" size="small" value={form2.country} onChange={(event) =>{const temp={...form2}; temp.country=event.target.value; setForm2(temp); }}/>
              </>  :
              val === 3 ?
              <>
                <TextField id="standard-basic" label="Name" size="small" value={form3.name} onChange={(event) =>{const temp={...form3}; temp.name=event.target.value; setForm3(temp); }}/>
                <TextField id="standard-basic" label="Alternate Name" size="small" value={form3.altname} onChange={(event) =>{const temp={...form3}; temp.altname=event.target.value; setForm3(temp); }}/>
                <TextField id="standard-basic" select label="Status" size="small" value={form3.status} onChange={(event) =>{const temp={...form3}; temp.status=event.target.value; setForm3(temp); }}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Time Zone" size="small" value={form3.tzone} onChange={(event) =>{const temp={...form3}; temp.tzone=event.target.value; setForm3(temp); }}/>
                <TextField id="standard-basic" label="Daylight Saving Time" size="small" value={form3.dst} onChange={(event) =>{const temp={...form3}; temp.dst=event.target.value; setForm3(temp); }}/>
                <TextField id="standard-basic" select label="Code Type" size="small" value={form3.codetype} onChange={(event) =>{const temp={...form3}; temp.codetype=event.target.value; setForm3(temp); }}>
                  {codetype.map((ctype) => (
                    <option key={ctype.value} value={ctype.value}>
                      {ctype.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Parent Name" size="small" value={form3.pname} onChange={(event) =>{const temp={...form3}; temp.pname=event.target.value; setForm3(temp); }}/>
              </> :
              val ===4 ?
              <>
                <TextField id="standard-basic" label="Name" size="small" value={form4.name} onChange={(event) =>{const temp={...form4}; temp.name=event.target.value; setForm4(temp); }}/>
                <TextField id="standard-basic" label="Alternate Name" size="small" value={form4.altname} onChange={(event) =>{const temp={...form4}; temp.altname=event.target.value; setForm4(temp); }}/>
                <TextField id="standard-basic" select label="Status" size="small" value={form4.status} onChange={(event) =>{const temp={...form4}; temp.status=event.target.value; setForm4(temp); }}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" select label="Code Type" size="small" value={form4.codetype} onChange={(event) =>{const temp={...form4}; temp.codetype=event.target.value; setForm4(temp); }}>
                  {codetype.map((ctype) => (
                    <option key={ctype.value} value={ctype.value}>
                      {ctype.key}
                    </option>
                  ))}
                </TextField>
              </> :
              val ===5 ?
              <>
                <TextField id="standard-basic" label="Name" size="small" value={form5.name} onChange={(event) =>{const temp={...form5}; temp.name=event.target.value; setForm5(temp); }}/>
                <TextField id="standard-basic" select label="Status" size="small" value={form5.status} onChange={(event) =>{const temp={...form5}; temp.status=event.target.value; setForm5(temp); }}>
                  {status.map((stat) => (
                    <option key={stat.value} value={stat.value}>
                      {stat.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" select label="Code Type" size="small" value={form5.codetype} onChange={(event) =>{const temp={...form5}; temp.codetype=event.target.value; setForm5(temp); }}>
                  {codetype.map((ctype) => (
                    <option key={ctype.value} value={ctype.value}>
                      {ctype.key}
                    </option>
                  ))}
                </TextField>
                <TextField id="standard-basic" label="Code" size="small" value={form5.code} onChange={(event) =>{const temp={...form5}; temp.code=event.target.value; setForm5(temp); }}/>
                <TextField id="standard-basic" label="Parent Name" size="small" value={form5.parent} onChange={(event) =>{const temp={...form5}; temp.parent=event.target.value; setForm5(temp); }}/>
                <TextField id="standard-basic" label="Country" size="small" value={form5.country} onChange={(event) =>{const temp={...form5}; temp.country=event.target.value; setForm5(temp); }}/>
                <TextField id="standard-basic" label="City" size="small" value={form5.city} onChange={(event) =>{const temp={...form5}; temp.city=event.target.value; setForm5(temp); }}/>
              </> :
              <>
                 <TextField id="standard-basic" label="Name" size="small" value={form6.name} onChange={(event) =>{const temp={...form6}; temp.name=event.target.value; setForm6(temp); }}/>
                 <TextField id="standard-basic" label="Type" size="small" value={form6.type} onChange={(event) =>{const temp={...form6}; temp.type=event.target.value; setForm6(temp); }}/>
                 <TextField id="standard-basic" label="Code" size="small" value={form6.code} onChange={(event) =>{const temp={...form6}; temp.code=event.target.value; setForm6(temp); }}/>
                 <TextField id="standard-basic" select label="Code Type" size="small" value={form6.codetype} onChange={(event) =>{const temp={...form6}; temp.codetype=event.target.value; setForm6(temp); }}>
                   {codetype.map((ctype) => (
                    <option key={ctype.value} value={ctype.value}>
                      {ctype.key}
                    </option>
                    ))}
                 </TextField>
                 <TextField id="standard-basic" label="Location Name" size="small" value={form6.locname} onChange={(event) =>{const temp={...form6}; temp.locname=event.target.value; setForm6(temp); }}/>
                 <TextField id="standard-basic" label="Location Type" size="small" value={form6.loctype} onChange={(event) =>{const temp={...form6}; temp.loctype=event.target.value; setForm6(temp); }}/>
              </>
          }
            
          </form>
          <div className={classes.btn}>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#00b6d3", color: "#ffffff" }}
              // onClick={()=>dispatch(setres(tabnumber))}
              onClick={getresult}
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
