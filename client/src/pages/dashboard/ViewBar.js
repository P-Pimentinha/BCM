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
          <header>
            <b>General Info</b>
          </header>
          <div className='left'>
            <p>
              <b>Name : </b>
            </p>
            <p>
              <b>Address : </b>
            </p>
            <p>
              <b>Location : </b>
            </p>
            <p>
              <b>WIFI : </b>
            </p>
          </div>
          <div className='right'>
            <p> {bar.name}</p>
            <p> {bar.address}</p>
            <p> {bar.location}</p>
            <p> {bar.wifi}</p>
          </div>
        </div>

        <div className='box'>
          <header>
            <b>Register</b>
          </header>
          <div className='left'>
            <p>
              <b>User :</b>
            </p>
            <p>
              <b>Password :</b>
            </p>
          </div>
          <div className='right'>
            <p>{bar.kasseUser}</p>
            <p>{bar.registerPassword}</p>
          </div>
        </div>

        <div className='box'>
          <header>
            <b>Phone</b>
          </header>
          <div className='left'>
            <p>
              <b>Number :</b>
            </p>
            <p>
              <b>Unlock :</b>
            </p>
            <p>
              <b>PIN :</b>
            </p>
            <p>
              <b>PUK :</b>
            </p>
          </div>
          <div className='right'>
            <p>{bar.phoneNumber}</p>
            <p>{bar.unlockPhoneCode}</p>
            <p>{bar.phonePin}</p>
            <p>{bar.phonePuk}</p>
          </div>
        </div>

        <div className='box'>
          <header>
            <b>Tablet</b>
          </header>
          <div className='left'>
            <p>
              <b>Unlock :</b>
            </p>
            <p>
              <b>PIN :</b>
            </p>
            <p>
              <b>PUK :</b>
            </p>
          </div>
          <div className='right'>
            <p>{bar.tabletUnlock}</p>
            <p>{bar.tabletPin}</p>
            <p>{bar.tabletPuk}</p>
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
