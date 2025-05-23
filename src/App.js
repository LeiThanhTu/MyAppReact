import "./App.css";
import Toggle from "./components/state/Toggle";
import YoutubeList from "./components/youtube/YoutubeList";

function App() {
 const name = "ABCD"
  return (
  <div>
     <YoutubeList>
      {name}
    </YoutubeList> 

    <Toggle></Toggle>
  </div>
  );
}
// Props -> Properties

export default App;
