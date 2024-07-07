import React from "react";

function Search() {

  // filter 
  function handleFilterPlant(filteredPlant) {
    const filtedPlants = plants.map((plant) => {
      if(plant.id === filteredPlant.id) {
        return filteredPlant
      } else {
        return plant
      }
    })
    setPlants(filteredPlants)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
