import React, { useState } from 'react';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Apple', 'Banana']);

  const handleAdd = () => {
    setCategories((values) => [...values, 'Orange']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
