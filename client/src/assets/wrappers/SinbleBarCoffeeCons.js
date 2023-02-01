import styled from 'styled-components';

const Wrapper = styled.article`
  /* background: var(--white); */
  /* border-radius: var(--borderRadius); */
  /* display: grid; */
  /* grid-template-rows: 1fr auto; */

  .container-grid {
    /* width: 400px; */
    /* height: 500px; */

    display: grid;
    grid-template-columns: 1fr;
    gap: 20px 20px;
  }

  /* @media (min-width: 992px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  } */

  @media (min-width: 650px) {
    .container-grid {
      grid-template-columns: 1fr 1fr 1fr;
      margin: 0.5rem;
    }
  }

  .box {
    display: flex;
    background-color: white;
    color: black;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;

    box-shadow: var(--shadow-2);
    border-radius: var(--borderRadius);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
