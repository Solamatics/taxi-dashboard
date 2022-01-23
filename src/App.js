import "./index.css";
import styled from 'styled-components';
import Analytics from './components/Analytics';
import Dashboard from "./components/Dashboard";
import Earning from "./components/Earning";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ResuableStyles from './components/ReusableStyles';
import Sidebar from "./components/Sidebar";
import Transfers from "./components/Transfers";


function App() {
  return <Div>
    <Sidebar />
    <Dashboard />
  </Div>;
}

export default App;
const Div = styled.div``;