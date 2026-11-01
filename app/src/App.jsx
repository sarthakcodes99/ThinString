import { Routes, Route} from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Aboutpage from "./pages/Aboutpage";
const App = () => {
    return(
     <Routes>
      <Route path="/" element={<Landingpage />}/>
      <Route path="/about" element={<Aboutpage />}></Route>
     </Routes>
    )
}

export default App;