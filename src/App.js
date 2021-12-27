// import './App.css';
import  Header from './components/Header';
import TabHeader from './components/TabHeader';
import SearchView from './components/SearchView';
import DetailedView from './components/DetailedView';
import { useSelector } from 'react-redux';
import "@maersk-global/fonts/maeu/fonts.css";
import '@maersk-global/mds-foundations/foundations.css';
import "@maersk-global/mds-design-tokens/maersk/light/web/css/design-tokens.css"; 


function App() {
  const tab = useSelector((state) => state.tabsReducer.tabs);
  const value = useSelector((state) => state.tabsReducer.value);

  return (
      <>
          <Header />
          <TabHeader/>
          {tab[value]===0? <SearchView/> : <DetailedView/> }
      </>
  );
}

export default App;
