import React from 'react';
import { SingleBarCoffeeCons } from '../../components';
import { useAppContext } from '../../context/appContext';
import Loading from '../../components/Loading';
import { useEffect } from 'react';
import Wrapper from '../../assets/wrappers/SinbleBarCoffeeCons';

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
    <Wrapper>
      <h3 className='header'>Coffee Consumed: (KG)</h3>
      <div className='container-grid'>
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
    </Wrapper>
  );

  // return <SingleBarCoffeeCons barName={'MMM'} />;
};

export default WelcomePage;
