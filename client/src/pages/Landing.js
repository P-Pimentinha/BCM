import React from 'react';
import { Logo } from '../components/index';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Welcome to <span>BCM</span>
          </h1>

          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='xxx' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
