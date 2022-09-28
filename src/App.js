
import './App.css';
import SideBar from './Component/SideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Component/HomePage/HomePage';
import Navbars from './Component/Navbar/Navbars';
function App() {
  return (
    <div className="App">
      {/* <Navbars/> */}
      <SideBar/>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
