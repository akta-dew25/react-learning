import React, { useState, useEffect } from "react";

function CarsList({ cars }) {
  const [updateCars, setUpdateCars] = useState(cars || []);

  useEffect(() => {
    setUpdateCars(cars);
  }, [cars]);

  return (
    <div>
      <tr>
        <th>Sl. No.</th>
        <th>name</th>
        <th>price</th>
      </tr>
      <tbody>
        {updateCars.map((u, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{u.name}</td>
            <td>{u.price}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default CarsList;
