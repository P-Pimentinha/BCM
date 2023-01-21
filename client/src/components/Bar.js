import React from 'react';

import { FaLocationArrow, FaBriefcase, FaCashRegister } from 'react-icons/fa';

import { AiOutlinePhone, AiOutlineTablet } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import BarInfo from './BarInfo';

const Bar = ({
  _id,
  name,
  location,
  address,
  phoneNumber,
  notes,
  unlockPhoneCode,
  tabletCodes,
  phonePin,
  phonePuk,
  kassenCodes,
}) => {
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
        <div className='content-center'>
          {unlockPhoneCode && (
            <BarInfo icon={<AiOutlinePhone />} text={unlockPhoneCode} />
          )}
          {phonePin && <BarInfo icon={<FaLocationArrow />} text={phonePin} />}

          {phonePuk && <BarInfo icon={<AiOutlineTablet />} text={phonePuk} />}
          {kassenCodes && (
            <BarInfo icon={<FaCashRegister />} text={kassenCodes} />
          )}
        </div>

        <footer>
          <div className='action'>
            <Link
              to='/addbar'
              onClick={() => setEditBar(_id)}
              className='btn edit-btn'
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteBar(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Bar;
