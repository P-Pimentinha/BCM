import React from 'react';
import { SingleBarCoffeeCons } from '../../components';
import { useAppContext } from '../../context/appContext';
import Loading from '../../components/Loading';
import { useEffect } from 'react';

const WelcomePage = () => {
  const { getAllCoffeeCons, allCoffeeCons, isLoading, allBarNames } =
    useAppContext();

  useEffect(() => {
    getAllCoffeeCons();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <div>
      {allBarNames.map((coffee) => {
        return (
          <SingleBarCoffeeCons
            key={coffee.id}
            barName={coffee.name}
            arr={allCoffeeCons}
          />
        );
      })}
    </div>
  );

  // return <SingleBarCoffeeCons barName={'MMM'} />;
};

export default WelcomePage;
