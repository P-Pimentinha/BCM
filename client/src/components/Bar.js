import React from 'react';

import { FaLocationArrow, FaBriefcase, FaCashRegister } from 'react-icons/fa';

import { AiOutlinePhone, AiOutlineTablet } from 'react-icons/ai';
import { GrNotes } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import BarInfo from './BarInfo';

const Bar = ({
  _id,
  name,
  location,
  address,
  phonenumber,
  notes,
  phoneCodes,
  tabletCodes,
  kassenCodes,
}) => {
  const { setEditBar, deleteBar } = useAppContext();
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{location.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p>{address}</p>
          <p>{phonenumber}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <BarInfo icon={<FaLocationArrow />} text={location} />

          <BarInfo icon={<AiOutlinePhone />} text={phoneCodes} />
          <BarInfo icon={<AiOutlineTablet />} text={tabletCodes} />
          <BarInfo icon={<FaCashRegister />} text={kassenCodes} />
          <BarInfo icon={<GrNotes />} text={notes} />
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
