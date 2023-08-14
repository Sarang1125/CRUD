import Footer from "./components/Footer";
import Header from "./components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
     
      <Footer />
    </div>
  );
}

export default App;