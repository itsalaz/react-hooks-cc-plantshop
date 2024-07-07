import {useState} from "react";

export default function NewPlantForm({onAddPlant}) {
  const [formData, setFormData]= useState({
    id: "",
    name: "",
    image: "",
    price: "",
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Fetch the current list of plants to determine the next ID
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => {
        const nextId = plants.length ? Math.max(...plants.map((plant) => plant.id)) + 1 : 1;
        const newPlantData = {
          id: nextId,
          name: formData.name,
          image: formData.image,
          price: formData.price,
        }

        return fetch("http://localhost:6001/plants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlantData),
        })
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response Not Ok")
        }
        return response.json()
      })
      .then((newPlant) => {
        onAddPlant(newPlant)
      })
      .catch((error) => {
        console.error("Error adding plant:", error)
      })
  }

    return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        {``}
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        {``}
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        {``}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

