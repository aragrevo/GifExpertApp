import React from 'react';
// import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  return (
    <div className='gallery-item'>
      <div className='gallery-item-inner'>
        <img src={url} alt={title} />
        <div className='overlay'>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};

// GifGridItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
// };

export default GifGridItem;
