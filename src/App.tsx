import React from 'react';
import styled from "styled-components";

const Layout = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px 100px;
  justify-content: flex-end;
  font-family: sans-serif;
  font-size: 2em;
  color: #030303;
  background-image: url('harold.jpg');
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    align-items: center;
  }
`;

function App() {
  return (
   <Layout>
     <h1>High Pants - Low Standards</h1>
     <h2>Coming Soon</h2>
   </Layout>
  );
}

export default App;
