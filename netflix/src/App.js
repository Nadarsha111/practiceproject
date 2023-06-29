import NavBar from "./Compnents/NavBar/NavBar";
import "./App.css";
import Banner from "./Compnents/Banner/Banner";
import RowPost from "./Compnents/RowPost/RowPost";
import { originals,action,horror,romance } from "./url";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals} />
      <RowPost title="Action" url={action} isSmall />
      <RowPost title="Horror" url={horror} isSmall />
      <RowPost title="Romance" url={romance} isSmall />
    </div>
  );
}

export default App;
