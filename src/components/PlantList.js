import React from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm"

function PlantList({plants, onDeletePlant}) {
  const [selectedPlant, setSelectedPlant] = useState("All")
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
        key= {plant.id} />
      ))}

    </ul>
  );
}

export default PlantList;
