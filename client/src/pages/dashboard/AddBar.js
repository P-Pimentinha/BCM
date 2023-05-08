import React, { useEffect } from 'react';
import { FormRow, Alert } from './../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddBar = () => {
  const {
    isLoading,
    showAlert,
    isEditing,
    displayAlert,
    editBarId,
    name,
    location,
    address,
    wifi,
    notes,
    phoneNumber,
    unlockPhoneCode,
    phonePin,
    phonePuk,
    tabletUnlock,
    tabletPin,
    tabletPuk,
    kasseUser,
    registerPassword,
    handleChange,
    clearValues,
    createBar,
    getBars,
    editbar,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // while testing

    if (!name) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editbar();
      return;
    }
    createBar();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit bar' : 'add bar'}</h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='location'
            value={location}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='address'
            value={address}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            name='wifi'
            value={wifi}
            handleChange={handleJobInput}
          />
        </div>
        <hr />
        <div className='form-center'>
          <FormRow
            labelText='Phone Number'
            type='text'
            name='phoneNumber'
            value={phoneNumber}
            handleChange={handleJobInput}
          />
          <FormRow
            labelText='Unlock Phone'
            type='text'
            name='unlockPhoneCode'
            value={unlockPhoneCode}
            handleChange={handleJobInput}
          />
          <FormRow
            labelText='Phone Pin'
            type='text'
            name='phonePin'
            value={phonePin}
            handleChange={handleJobInput}
          />
          <FormRow
            labelText='Phone Puk'
            type='text'
            name='phonePuk'
            value={phonePuk}
            handleChange={handleJobInput}
          />
        </div>
        <hr />

        <div className='form-center'>
          <FormRow
            labelText='Unlock Tablet'
            type='text'
            name='tabletUnlock'
            value={tabletUnlock}
            handleChange={handleJobInput}
          />

          <FormRow
            labelText='Tablet Pin'
            type='text'
            name='tabletPin'
            value={tabletPin}
            handleChange={handleJobInput}
          />

          <FormRow
            labelText='Tablet Puk'
            type='text'
            name='tabletPuk'
            value={tabletPuk}
            handleChange={handleJobInput}
          />
        </div>
        <hr />
        <div className='form-center'>
          <FormRow
            labelText='Cash Register User'
            type='text'
            name='kasseUser'
            value={kasseUser}
            handleChange={handleJobInput}
          />

          <FormRow
            labelText='Cash Register Password'
            type='text'
            name='registerPassword'
            value={registerPassword}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            name='notes'
            value={notes}
            handleChange={handleJobInput}
          />
        </div>
        <hr />
        <div className='form-center'>
          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>

            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddBar;
