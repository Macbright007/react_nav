import styled from "styled-components";

export const Navigation = styled.div`
  border: 2px solid #00474b;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 50px;
  padding: 20px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-around;

  h1 {
    color: #00474b;
    margin-top: 2px;
    font-weight: 800;
    font-size: 25px;
    font-family: "Water Brush", cursive;
    letter-spacing: 1px;
  }
  span {
    font-family: "Water Brush", cursive;
    font-size: 3rem;
  }

  label {
    display: none;
    color: #00474b;
    font-size: 3rem;
  }
  input {
    display: none;
  }

  .navContent {
    margin-top: 10px;
  }
  .navContent a {
    color: #00474b;
    font-size: 20px;
    font-weight: 700;
    margin-left: 60px;
  }

  @media (max-width: 650px) {
      justify-content: space-between;
    .navContent {
      width: 100%;
      padding: 20px;
      position: absolute;
      top: 0;
      right: -53px;
      margin: 70px;
    }
    .navContent a:hover{
        background-color: white;
        color: #00474b;
        cursor: pointer;
    }

    label {
      display: block;
      cursor: pointer;
      /* margin-left: 30px; */
    }
    .navContent a {
      display: none;
      text-align: center;
      padding: 20px;
      background-color: #00474b;
      color: white;
      border-bottom: 2px solid white;
    }
    
    #toggle:checked + .navContent a {
      display: block;
    }
  }
`;

export const NavItems = styled.div`
  margin-top: 20px;
  width: 30%;
  margin-left: 14rem;
  display: flex;

  .navContent button {
    padding: 10px;
    width: 100%;
    border-radius: 20px;
    border: none;
    font-weight: 600;
    font-family: cursive;
    /* margin-bottom: 200px; */
  }
  button:hover {
    cursor: pointer;
    background-color: #ffffff42;
    color: #00474b;
    border: 2px solid #00474b;
  }
  @media (max-width: 650px) {
    /* button {
      display: block;
    } */
  }
`;
