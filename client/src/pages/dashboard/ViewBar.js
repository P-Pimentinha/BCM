import React from 'react';

import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ViewBar = () => {
  const { bar } = useAppContext();

  if (bar.length === 0) {
    return <Navigate to='/bars' />;
  }

  return <div>{bar.name}</div>;
};

export default ViewBar;
