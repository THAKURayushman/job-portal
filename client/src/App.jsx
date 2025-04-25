import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";
import JobsSection from "./components/JobSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <JobsSection />
    </div>
  );
}

export default App;
