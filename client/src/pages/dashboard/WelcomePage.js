import React from 'react';
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';

const WelcomePage = () => {
  const { getAllCoffeeCons, allCoffeeCons } = useAppContext();

  useEffect(() => {
    getAllCoffeeCons();
  }, []);

  function test() {
    let totalKilos = 0;
    for (let i = 0; i < allCoffeeCons.length; i++) {
      totalKilos += allCoffeeCons[i].kilos;
    }
    return totalKilos;
  }

  return <div>Total Coffee Consumed: {test()}</div>;
};

export default WelcomePage;
