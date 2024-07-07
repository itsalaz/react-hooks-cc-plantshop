import {useState} from "react";
import PlantList from "./PlantList";

function NewPlantForm({onAddPlant}) {
  const [formData, setFormData]= useState({
    id: "",
    name: "",
    image: "",
    price: "",
  },



  function handleSubmit(event) {
    event.preventDefault() 
    const newPlantData = {
      id: parseInt(formData.id),
      name: formData.name,
      image: formData.image,
      price: formData.price,
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantData)
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error("Network Response was not ok")
      }
      return response.json()
    })
    .then((newPlant) => {
      onAddPlant(newPlant)
    })
    .catch((error) => {
      console.error("Error adding item", error)
    })
  })

    return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={changeName}/>
        {``}
        <input type="text" name="image" placeholder="Image URL" value={image}onChange={changeImage}/>
        {``}
        <input type="number" name="price" step="0.01" placeholder="Price" value={price}onChange={changePrice}/>
        {``}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
