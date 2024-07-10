import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not Ok")
        }
        return response.json()
      })
      .then((data) => {
        setPlants(data)
      })
  }, [])


  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;
