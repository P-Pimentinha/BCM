import React from 'react';
import { FormRow, Alert } from './../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/AddCoffee';

const AddCoffee = () => {
  const { showAlert, isLoading, addCoffee } = useAppContext();
  const test = () => {
    console.log('hello');
  };
  return (
    <Wrapper>
      {showAlert && <Alert />}
      <button
        className='btn btn-block submit-btn'
        type='submit'
        onClick={addCoffee}
        disabled={isLoading}
      >
        test
      </button>
    </Wrapper>
  );
};

export default AddCoffee;
