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
  /* header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    h5 {
      letter-spacing: 0;
    }
  }

  .header-title {
    padding: 1rem 1.5rem;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }

  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }

    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    border-bottom: 1px solid var(--grey-100);
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  h5 {
    margin: 0;
  }
  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }

  
  &:hover .actions {
    visibility: visible;
  } */
`;

export default Wrapper;
