import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not Ok")
        }
        return response.json()
      })
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data)
      })
  }, [])

  useEffect(() => {
    setFilteredPlants(
      plants.filter((plant) =>
        plant.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, plants])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
    setFilteredPlants([...plants, newPlant].filter((plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase())
    ))
  }

  function handleSearch(search) {
    setSearch(search)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <PlantPage plants={filteredPlants} onAddPlant={handleAddPlant} search={search} onSearchChange={handleSearch} />
    </div>
  );
}

export default App;
