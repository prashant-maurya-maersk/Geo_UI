// import './App.css';
import  Header from './components/Header';
import { Paper} from "@material-ui/core";
import TabHeader from './components/TabHeader';
import SearchView from './components/SearchView';
import DetailedView from './components/DetailedView';


function App() {
  return (
      <Paper style={{ height: "100vh" }}>
          <Header />
          <TabHeader/>
          <SearchView/>
          {/* <DetailedView/> */}
      </Paper>
  );
}

export default App;
