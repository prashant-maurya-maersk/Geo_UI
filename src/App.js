// import './App.css';
import  Header from './components/Header';
import TabHeader from './components/TabHeader';
import SearchView from './components/SearchView';
import DetailedView from './components/DetailedView';
import { useSelector } from 'react-redux'


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
