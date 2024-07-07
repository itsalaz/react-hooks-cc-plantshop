import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

export default function PlantPage({plants, onAddPlant}) {

  return (
    <main>
      <NewPlantForm plants={plants} onAddPlant={onAddPlant}/>
      <Search plants={plants} onFilterPlants = {onFilterPlants}/>
      <PlantList />
    </main>
  )
}

