import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) =>({
    tabs:{
        textTransform: "none",
    },
    panel:{
      "& .MuiTab-textColorInherit.Mui-selected":{
        color: "#00b6d3",
      }
    },
}));

function TabHeader() {
  const [value, setValue] = React.useState(0);
  const [indicate,setIndicate] = React.useState(true);
  const classes = useStyles();
  const [tabs,setTabs] = React.useState(["New Search"," New Search 2","New Search 3"]);

  React.useEffect(()=>{
    console.log("inside useEffect")
  },[indicate]);

  const handleChange = async(event, newValue) => {
    if(event.target.tagName ==="svg" || event.target.tagName === "path"){
       tabs.splice(newValue,1);
       setTabs(tabs);
       if(newValue<value || (newValue===value && newValue!==0))
         setValue(value-1);
       await setIndicate(!indicate);
       
    }
    else
       setValue(newValue);
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={value}
          TabIndicatorProps={{
            style:{
              backgroundColor:"#00b6d3",
            }
          }}
          className={classes.panel}
          variant="scrollable"
          scrollButtons="on"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
            {tabs.map((name) => <Tab label={<><div>{name}<ClearIcon fontSize="small" style={{marginBottom:"-.8vh",marginLeft:".2vw"}}/></div></>} className={classes.tabs} />)}
        </Tabs>
      </Paper>
    </div>
  );
}

export default TabHeader;
