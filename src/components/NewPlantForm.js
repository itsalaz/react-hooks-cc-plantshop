import {useState} from "react";

function NewPlantForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  function changeName(event) {setName(event.target.value)}
  function changeImage(event) {setImage(event.target.value)}
  function changePrice(event) {setPrice(event.target.value)}

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => handler(event, name, image, price)}>
        <input type="text" name="name" placeholder="Plant name" onChange={changeName}/>
        {``}
        <input type="text" name="image" placeholder="Image URL" onChange={changeImage}/>
        {``}
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={changePrice}/>
        {``}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
