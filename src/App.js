import "./app.css"
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <div style={{position:"relative"}}>
      <div className="App">
        <Navbar />
        <div className="main_container">
          <Header />
          <div className="inner_container">
            <UserDetails />
            <Body />
          </div>
        </div>
      </div>
      <div className="floating_icon">
      <i class="fa-solid fa-list" style={{fontSize : "20px", color:"white"}}></i>
      </div>
    </div>
  );
}

export default App;
