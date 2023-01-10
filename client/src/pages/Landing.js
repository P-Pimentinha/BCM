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
            xxx <span>xxx</span> xxx
          </h1>
          <p>
            Cred marfa crucifix migas cornhole. Blog chartreuse ugh polaroid,
            shabby chic gastropub street art asymmetrical bicycle rights. Master
            cleanse four dollar toast snackwave blog typewriter biodiesel
            everyday carry vibecession flannel heirloom small batch. Poutine sus
            paleo, tumeric swag jean shorts ennui kale chips edison bulb kitsch
            tilde. Ethical edison bulb four dollar toast twee, kombucha
            scenester meditation freegan church-key narwhal skateboard.
            Skateboard PBR&B meggings keffiyeh mixtape pok pok.
          </p>
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
