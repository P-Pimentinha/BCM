import React from 'react';
import { FormRow, Alert } from './../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/AddCoffee';

const AddCoffee = () => {
  const { showAlert, isLoading, addCoffee } = useAppContext();
  const test = () => {
    console.log('hello');
  };
  return <Wrapper>{showAlert && <Alert />}</Wrapper>;
};

export default AddCoffee;
