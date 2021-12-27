import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector, useDispatch } from "react-redux";
import { deletetab, setvalue } from "../actions/allActions";
import "@maersk-global/fonts/maeu/fonts.css";
import '@maersk-global/mds-foundations/foundations.css';
import "@maersk-global/mds-design-tokens/maersk/light/web/css/design-tokens.css"; 
 
const useStyles = makeStyles((theme) =>({
    tabs:{
        textTransform: "none",
    },
    panel:{
      "& .MuiTab-textColorInherit.Mui-selected":{
        color: "#42B0D5",
      }
    },
}));

function TabHeader() {
  const tab = useSelector((state) => state.tabsReducer.tabs);
  const value = useSelector((state) => state.tabsReducer.value);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = async(event, newValue) => {
    if(event.target.tagName ==="svg" || event.target.tagName === "path"){
      if(tab.length===1){
        window.alert("You can't close this tab as you have reached to the minimum number of tabs")
      }
      else{
       dispatch(deletetab(newValue));
       if(newValue<value || (newValue===value && newValue!==0))
         dispatch(setvalue(value-1))     
       }  
    }
    else
        dispatch(setvalue(newValue))
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={value}
          TabIndicatorProps={{
            style:{
              backgroundColor:"#42B0D5",
            }
          }}
          className={classes.panel}
          variant="scrollable"
          scrollButtons="on"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
            {tab.map((name) => <Tab label={<><div>{name===0? "New Search": "Result Tab"}<ClearIcon fontSize="small" style={{marginBottom:"-.8vh",marginLeft:".2vw"}}/></div></>} className={classes.tabs} />)}
        </Tabs>
      </Paper>
    </div>
  );
}

export default TabHeader;
