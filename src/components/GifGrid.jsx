import React from 'react';
// import PropTypes from 'prop-types';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);
  return (
    <>
      <div className='section-title'>
        <h3>{category}</h3>
      </div>
      {loading && <p>Loading</p>}
      <div className='row'>
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

// GifGrid.propTypes = {
//   category: PropTypes.string.isRequired,
// };

export default GifGrid;
