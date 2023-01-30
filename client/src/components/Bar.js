import React from 'react';

import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';

const Bar = ({ _id, name, location, address, phoneNumber }) => {
  const { setEditBar, deleteBar, getBar } = useAppContext();
  return (
    <Wrapper>
      <header>
        <Link to='/viewBar' onClick={() => getBar(_id)} className='main-icon'>
          {location.charAt(0)}
        </Link>
        <div className='info'>
          <h5>{name}</h5>
          <p>{address}</p>
          <p>{phoneNumber}</p>
        </div>
      </header>

      <div className='content'>
        {/* <div className='content-center'>
          {unlockPhoneCode && (
            <BarInfo icon={<AiOutlinePhone />} text={unlockPhoneCode} />
          )}
          {phonePin && <BarInfo icon={<FaLocationArrow />} text={phonePin} />}

          {phonePuk && <BarInfo icon={<AiOutlineTablet />} text={phonePuk} />}
          {kassenCodes && (
            <BarInfo icon={<FaCashRegister />} text={kassenCodes} />
          )}
        </div> */}

        <footer>
          {/* <div className='action'>
            <Link
              to='/dailytasks'
              onClick={() => getBar(_id)}
              className='btn edit-btn'
            >
              Daily Tasks
            </Link>
          </div> */}
        </footer>
      </div>
    </Wrapper>
  );
};

export default Bar;
