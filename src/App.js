import "./App.css";
import Toggle from "./components/state/Toggle";
import Game from "./components/tictactoe/Game";
import YoutubeList from "./components/youtube/YoutubeList";

function App() {
 const name = "ABCD"
  return (
  <div>
     {/* <YoutubeList>
      {name}
    </YoutubeList> 

    <Toggle></Toggle> */}
    <Game></Game>

  </div>
  );
}
// Props -> Properties

export default App;
