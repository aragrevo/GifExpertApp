import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className='container'>
      <div className='row'>
        <div className='section-title'>
          <h2>GifExpertApp</h2>
        </div>
      </div>
      <div>
        <AddCategory setCategories={setCategories} />
      </div>
      <hr />
      <div>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default GifExpertApp;
