import React from 'react';

import { useAppContext } from '../../context/appContext';
import Loading from '../../components/Loading';

import Wrapper from '../../assets/wrappers/SinbleBarCoffeeCons';

const WelcomePage = () => {
  const { isLoading } = useAppContext();

  if (isLoading) {
    return <Loading center />;
  }

  return <Wrapper></Wrapper>;

  // return <SingleBarCoffeeCons barName={'MMM'} />;
};

export default WelcomePage;
