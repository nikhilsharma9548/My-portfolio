import { Toaster } from "react-hot-toast";
import './index.css'
import Main from "./Components/Main";


function App() {
  return (
   <>
    <div className="App flex overflow-hidden">
      <Main />
    </div>
    <Toaster
    position="bottom-center"
    reverseOrder={false}
    />
   </>

  );
}

export default App;
