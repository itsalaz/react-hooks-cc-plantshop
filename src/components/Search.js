import React, {useState} from "react";

export default function Search({plants, onFilterPlants}) {
  [search, setSearch] = useState("")

  function handleSearch(event) {
    event.target.value

    const filterSearch = { 
  }
  // filter 
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value= {search}
        onChange={handleSearch}
      />
    </div>
  )
}

}