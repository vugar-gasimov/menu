import React, { useState } from 'react';

import menu from '../data';

import Title from '../components/Title';
import Loading from '../components/Loading';
import MenuList from '../components/MenuList';
import MenuButtons from '../components/MenuButtons';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];
// short version
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Menu = () => {
  const [foods, setFoods] = useState(menu);
  const [categories] = useState(allCategories);

  const [isLoading, setIsLoading] = useState(false);

  const menuListHandler = (menuName) => {
    setIsLoading(true);
    setTimeout(() => {
      if (menuName === 'all') {
        setFoods(menu);
        setIsLoading(false);
      } else {
        setFoods(menu.filter((food) => food.category === menuName));
        setIsLoading(false);
      }
    }, 500);
  };

  if (isLoading) {
    return (
      <section className='menu'>
        <Loading />
      </section>
    );
  }

  return (
    <section className='menu'>
      <Title text='Our Menu' />
      <MenuButtons categories={categories} menuListHandler={menuListHandler} />
      <section className='section-center'>
        <MenuList foods={foods} />
      </section>
    </section>
  );
};

export default Menu;
