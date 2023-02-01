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
    grid-template-columns: 90%;
    gap: 20px 20px;
  }

  /* @media (min-width: 992px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  } */

  @media (min-width: 650px) {
    .container-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .box {
    background-color: white;
    color: black;

    /* border-radius: 5px; */
    /* border: 2px dodgerblue solid; */
    /* grid-template-columns: 200px 400px; */
    grid-template-rows: 20% auto;
    /* grid-template-columns: 20% auto; */
    box-shadow: var(--shadow-2);
    border-radius: var(--borderRadius);
    display: grid;

    grid-template-areas:
      'header header'
      'left right';
  }

  header {
    grid-area: header;
    text-align: center;
    display: grid;
    align-items: center;
  }

  .left {
    grid-area: left;
    text-align: end;
  }

  .right {
    grid-area: right;
    padding-left: 0.5em;
  }

  .action {
    padding-bottom: 0.5em;
  }

  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }

  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
`;

export default Wrapper;
