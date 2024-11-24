import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ foods }) => {
  return (
    <>
      {foods && foods.length > 0 ? (
        foods.map((food, index) => (
          <MenuItem key={food.id || index} {...food} />
        ))
      ) : (
        <article className='menu-item'>
          <div className='item-info'>
            <header className=''>
              <h5 className='title'>Unfortunately, can't find any menu.</h5>
            </header>
          </div>
        </article>
      )}
    </>
  );
};

export default MenuList;
