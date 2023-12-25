import Mainbar from "./Mainbar";
import Navbar from "./NavBar";
import Topbar from "./Topbar";
import UnNavbar from "./UnNavbar";
import "./index.css";
import { useSelector } from "react-redux";





const Index = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <UnNavbar />
      <Mainbar />
    </div>
  );
};

export default Index;
