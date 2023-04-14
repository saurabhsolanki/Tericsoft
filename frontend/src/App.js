import logo from './logo.svg';
import './App.css';
import GetData from './Components/GetData';
import AddData from './Components/AddData';
import UpdataData from './Components/UpdataData';

function App() {
  return (
    <div id='appMainDiv'>
      <AddData/>
      <GetData/>
    </div>
  );
}

export default App;
