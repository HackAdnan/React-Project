import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from "./Components/CustomButton";  // Updated import
import NavBar from "./Components/NavBar";
import Banner from './Components/Banner';
import "./index.css";
import Clients from './Components/Clients';
import Services from "./Components/Services"
import Experience from "./Components/Experience"
import HelpSection from './Components/HelpSection';
import Meet from './Components/Meet';
import Readmore from './Components/Readmore';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar/>
      <Banner/>
      <Clients/>
      <Services/>
      <Experience/>
      <HelpSection/>
      <Meet/>
      <Readmore/>
    </>
  );
}

export default App;
