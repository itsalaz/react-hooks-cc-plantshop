import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

export default function PlantPage({plants, onAddPlant}) {
  const [search, setSearch] = useState("")

  function handleSearchChange(event) {
    const searchPlant = event.target.value
    setSearch(searchPlant)

    const filteredDisplay = plants.filter((plant) =. {
      if(search === plants) {

      }
    })
  }
  return (
    <main>
      <NewPlantForm plants={plants} onAddPlant={onAddPlant}/>
      <Search plants={search} onSearchChange = {handleSearchChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  )
}

