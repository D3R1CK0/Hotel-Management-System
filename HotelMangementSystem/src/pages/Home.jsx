import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
    const [responsiveMD, SetResponsiveMd] = useState(false);
  return (
    <>
    <div className="flex">
 
  <div className="hidden lg:block w-64">
    <Navigation forceExpand={true} /> 
  </div>

  <div className="flex-1">
    <Dashboard />
  </div>
</div>
    </>
  );
};

export default Home;
