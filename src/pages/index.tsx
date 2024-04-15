
import React, { useState } from "react";
import QuestionnaireForm from "../components/QuestionnaireForm";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import yaml from "js-yaml";

const Home: React.FC = () => {
  // State to store tier data
  const [tierData, setTierData] = useState({
    tier1_availability_zone: "",
    tier1_service_name: "",
    tier1_icon_url: "",
    tier2_availability_zone: "",
    tier2_service_name: "",
    tier2_icon_url: "",
    tier3_availability_zone: "",
    tier3_service_name: "",
    tier3_icon_url: ""
  });

  
  const handleYamlData = (data: string) => {
   
    const jsonData = yaml.load(data);
    setTierData(jsonData); 
  };

  return (
    <div>
      {/* Render the QuestionnaireForm component */}
      <QuestionnaireForm onSubmit={handleYamlData} />
      
      {/* Render the ArchitectureDiagram component with tierData */}
      <ArchitectureDiagram tierData={tierData} />
    </div>
  );
};

export default Home;
