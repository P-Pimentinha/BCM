import React from 'react';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Bar from './Bar';
import Wrapper from '../assets/wrappers/JobsContainer';

const BarsContainer = () => {
  const { getBars, bars, isLoading, page, totalBars } = useAppContext();
  useEffect(() => {
    getBars();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (bars.length === 0) {
    return (
      <Wrapper>
        <h2>No Bars to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalBars} bar{bars.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {bars.map((bar) => {
          return <Bar key={bar._id} {...bar} />;
        })}
      </div>
    </Wrapper>
  );
};

export default BarsContainer;
