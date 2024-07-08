import React, { useState }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

export default function PlantPage({plants, onAddPlant}) {
  const [search, setSearch] = useState("")

  function handleSearchChange(query) {
    setSearch(query)
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search search={search} onSearchChange={handleSearchChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  )
}

