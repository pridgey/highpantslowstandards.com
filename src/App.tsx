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
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  color: #FCFCFC;
  background-color: #030303;
`;

function App() {
  return (
   <Layout>
     <img alt="old-man" src="/man-image.jpg" width="750px" />
     <h1>High Pants - Low Standards</h1>
     <h2>Coming Soon</h2>
   </Layout>
  );
}

export default App;
