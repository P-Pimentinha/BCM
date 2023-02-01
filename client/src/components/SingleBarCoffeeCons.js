import React from 'react';
import Wrapper from '../assets/wrappers/SinbleBarCoffeeCons';

const SingleBarCoffeeCons = ({ barName, arr }) => {
  let totalKiloss = barTotalKilos(barName, arr);

  function barTotalKilos(name) {
    let kilos = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].barID.name === name) kilos += arr[i].kilos;
    }
    return kilos;
  }

  return (
    <Wrapper>
      <div className='box'>
        {barName} : {totalKiloss}
      </div>
    </Wrapper>
  );
};

export default SingleBarCoffeeCons;

// const WelcomePage = () => {
//   const { getAllCoffeeCons, allCoffeeCons } = useAppContext();

//   useEffect(() => {
//     getAllCoffeeCons();
//   }, []);

//   function test() {
//     let totalKilos = 0;
//     for (let i = 0; i < allCoffeeCons.length; i++) {
//       totalKilos += allCoffeeCons[i].kilos;
//     }
//     console.log(allCoffeeCons[0]);

//     return totalKilos;
//   }

//   return (
//     <div>
//       <div>Total Coffee Consumed: {test()}</div>
//     </div>
//   );
// };

// export default WelcomePage;
