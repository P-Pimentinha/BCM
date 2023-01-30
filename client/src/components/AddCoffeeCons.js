import React from 'react';
import Wrapper from '../assets/wrappers/CoffeeCons';
import { FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';

const AddCoffeeCons = () => {
  const {
    showAlert,
    displayAlert,
    handleChange,
    isLoading,
    kilos,
    addCoffeeCons,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // while testing

    if (kilos === 0) {
      displayAlert();
      return;
    }
    addCoffeeCons();
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>Coffee Consumed</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='number'
            name='kilos'
            value={kilos}
            handleChange={handleInput}
          />
        </div>

        <button
          className='btn edit-btn'
          type='submit'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default AddCoffeeCons;
