import { Routes, Route} from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Aboutpage from "./pages/Aboutpage";
import Servicespage from "./pages/Servicespage";
import Contact from './pages/Contact'
const App = () => {
    return(
     <Routes>
      <Route path="/" element={<Landingpage />}/>
      <Route path="/about" element={<Aboutpage />}></Route>
      <Route path="/services" element={<Servicespage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
     </Routes>
    )
}

export default App;