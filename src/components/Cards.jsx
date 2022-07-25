import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Cards = () => {
  const [cards, setCards] = useState([]);

  const getInfoCard = async () => {
    const res = await axios.get(
      'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories'
    );
    console.log(res.data.communityCategories);
    setCards(res.data.communityCategories);
  };

  useEffect(() => {
    getInfoCard();
  }, []);

  return <Card cards={cards} />;
};

export default Cards;
