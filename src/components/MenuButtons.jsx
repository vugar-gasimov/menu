import React from 'react';

const MenuButtons = ({ menuListHandler, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            key={category}
            type='button'
            className='btn'
            onClick={() => menuListHandler(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default MenuButtons;
