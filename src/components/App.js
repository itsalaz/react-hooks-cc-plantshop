import {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then(items => {
      setPlants(items)
    })
  }, [])


  function addPlant(event, name, price, image) {
    event.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name, price, image})
    })
    .then(response => response.json())
    .then(newPlant => setPlants([...plants, newPlants])
  )}

  return (
    <div className="app">
      <Header />
      <PlantPage/>
    </div>
  );
}

export default App;
