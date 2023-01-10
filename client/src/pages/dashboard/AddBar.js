import React from 'react';
import { FormRow, Alert } from './../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddBar = () => {
  const {
    showAlert,
    isEditing,
    displayAlert,
    editBar,
    name,
    location,
    address,
    phoneNumber,
    notes,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      displayAlert();
      return;
    }
    console.log('Bar Created');
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
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
            name='notes'
            value={notes}
            handleChange={handleJobInput}
          />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddBar;
