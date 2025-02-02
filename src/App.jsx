import Dispaly from "./components/Dispaly";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Dispaly />
      </div>
      <Player />
    </div>
  );
}

export default App;
