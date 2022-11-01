import React, { useState } from "react";
import CarsList from "./CarsList";

function Cars() {
  const [newCar, setNewCar] = useState({ name: "", price: "" });
  const [carList, setCarList] = useState([]);

  function addNewCar() {
    setCarList([...carList, newCar]);
    setNewCar({ name: "", price: "" });
  }

  return (
    <div>
      <input
        value={newCar.name}
        placeholder="Car Name"
        onChange={(e) => {
          setNewCar({ ...newCar, name: e.target.value });
        }}
      ></input>
      <input
        value={newCar.price}
        placeholder="Price"
        onChange={(e) => {
          setNewCar({ ...newCar, price: e.target.value });
        }}
      ></input>
      <br />
      <button onClick={addNewCar}>Submit</button>
      <CarsList cars={carList} />
    </div>
  );
}

export default Cars;
