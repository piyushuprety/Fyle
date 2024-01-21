import { MainModule } from "./components/MainModule";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="main-module">
        <Navbar/>
        <MainModule/>
      </div>
    </div>
  );
}

export default App;
