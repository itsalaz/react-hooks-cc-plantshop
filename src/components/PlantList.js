import React from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm"

function PlantList({plants}) {
  const [selectedPlant, setSelectedPlant] = useState("All")

  function handleChange(event) {
    setSelectedPlant(event.target.value)
  }
  
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
        key= {plant.id}
        onAddPlant= {}
        onDeletePlant= {} />
      ))}

    </ul>
  );
}

export default PlantList;
