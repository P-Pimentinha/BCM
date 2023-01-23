import React from 'react';

import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SingleBar';

const ViewBar = () => {
  const { bar } = useAppContext();

  if (bar.length === 0) {
    return <Navigate to='/bars' />;
  }

  return (
    <Wrapper>
      <div class='container-grid'>
        <div className='box'>
          <header>General Info</header>
          <div className='content'>
            <p>
              <b>Name :</b> {bar.name}
            </p>
            <p>
              <b>Address :</b> {bar.address}
            </p>
            <p>
              <b>Location :</b> {bar.location}
            </p>
          </div>
        </div>

        <div className='box'>
          <header>Register</header>
          <div className='content'>
            <p>
              <b>User :</b> {bar.kassenCodes}
            </p>
          </div>
        </div>

        <div className='box'>
          <header>Phone</header>
          <div className='content'>
            <p>
              <b>Number :</b> {bar.phoneNumber}
            </p>
            <p>
              <b>PIN :</b> {bar.phonePin}
            </p>
            <p>
              <b>PUK :</b> {bar.phonePuk}
            </p>
          </div>
        </div>

        <div className='box'>
          <header>Tablet</header>
          <div className='content'>
            <p>
              <b>Tablet :</b> {bar.tabletCodes}
            </p>
          </div>
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
