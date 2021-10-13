import { Navbar } from "./components/Navbar";
import { Student, StudentComp } from "./components/Students";
import { Routes } from "./routes/Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}
