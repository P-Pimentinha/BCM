import { IoBarChartSharp } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { BiCoffee } from 'react-icons/bi';
import { GiCoffeeBeans } from 'react-icons/gi';

const links = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: <IoBarChartSharp />,
  },

  {
    id: 2,
    text: 'bars',
    path: 'bars',
    icon: <BiCoffee />,
  },
  {
    id: 3,
    text: 'addbar',
    path: 'addbar',
    icon: <GiCoffeeBeans />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
