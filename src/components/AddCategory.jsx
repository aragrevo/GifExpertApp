import React, { useState } from 'react';
import SearchIcon from './SearchIcon';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='search-box'>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <div className='icon'>
        <i>
          <SearchIcon />
        </i>
      </div>
    </form>
  );
};

// AddCategory.propTypes = {
//   setCategories: PropTypes.func.isRequired,
// };

export default AddCategory;
