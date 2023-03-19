import './App.css';
import Appbar from './components/Appbar';
import Posts from './components/Posts';
import Table from './components/table';
function App() {
  return (
    <div className="App">
      {/* <Table/> */}
       <Appbar/>
        <Posts/> 
    </div>
  );
}

export default App;
