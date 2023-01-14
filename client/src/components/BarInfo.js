import React from 'react';
import Wrapper from '../assets/wrappers/JobInfo';

const BarInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <Wrapper>
        <span className='icon'>{icon}</span>
        <span className='text'>{text}</span>
      </Wrapper>
    </Wrapper>
  );
};

export default BarInfo;
