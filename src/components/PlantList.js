import React from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm"

export default function PlantList({plants}) {
  const [selectedPlant, setSelectedPlant] = useState("All")
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
        key= {plant.id} />
      ))}

    </ul>
  )
}

