import {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => {
      if(!response.ok) {
        throw new Error ("Network response was not Ok")
      }
      return response.json()
    })
    .then((data) => {
      setPlants(plants)
    })
  }, [])

  
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleDeletePlant(id) {
    setPlants(plants.filter(plant => plant.id !== id))
  }

  return (
    <div className="app">
      <Header/>
      <PlantPage plants={plants} onAddPlant={handleAddPlant} onDeletePlant={handleDeletePlant}/>
    </div>
  );
}

export default App;
