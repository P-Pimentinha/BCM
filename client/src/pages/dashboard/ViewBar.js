import React from 'react';

import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SingleJob';

const ViewBar = () => {
  const { bar } = useAppContext();

  if (bar.length === 0) {
    return <Navigate to='/bars' />;
  }

  return (
    <Wrapper>
      <div className='container'>
        <div>
          <p>{bar._id}</p>
          <p>Name: {bar.name}</p>
          <p>address: {bar.address}</p>
          <p>kassenCodes: {bar.kassenCodes}</p>
          <p>location: {bar.location}</p>
        </div>
        <div>
          <p>{bar._id}</p>
          <p>Name: {bar.name}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewBar;
