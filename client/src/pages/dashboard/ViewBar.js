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
      <div class='grid'>
        <div className='box'>
          <header>General Info</header>

          <p>Name: {bar.name}</p>
          <p>Address: {bar.address}</p>
          <p>Location: {bar.location}</p>
        </div>
        <div className='box'>
          <header>Register</header>

          <span>User: {bar.kassenCodes}</span>
        </div>
        <div className='box'>
          <header>Phone</header>

          <p>number: {bar.phoneNumber}</p>
          <p>Pin: {bar.phonePin}</p>
          <p>Puk: {bar.phonePuk}</p>
        </div>
        <div className='box'>
          <header>Tablet</header>

          <span>Tablet: {bar.tabletCodes}</span>
        </div>
      </div>

      {/* <div className='container'>
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
      </div> */}
    </Wrapper>
  );
};

export default ViewBar;
