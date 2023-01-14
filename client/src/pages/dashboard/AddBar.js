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
    editBar,
    name,
    location,
    address,
    phoneNumber,
    notes,
    phoneCodes,
    tabletCodes,
    kassenCodes,
    handleChange,
    clearValues,
    createBar,
    getBars,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // while testing

    if (!name) {
      displayAlert();
      return;
    }
    if (isEditing) {
      // eventually editJob()
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
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
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
            name='phoneNumber'
            value={phoneNumber}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            name='phoneCodes'
            value={phoneCodes}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            name='tabletCodes'
            value={tabletCodes}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            name='kassenCodes'
            value={kassenCodes}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            name='notes'
            value={notes}
            handleChange={handleJobInput}
          />

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
