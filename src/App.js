import { Route, Routes } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
