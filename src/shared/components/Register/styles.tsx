import styled from "styled-components";

export const RegisterSection = styled.section`
  display:flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  z-index: 99;
  width: 100%;
  height: 100%;
  padding: 2rem 10rem;
  @media (max-width: 1366px) {
    height: 100%;
  }
  @media (max-width: 600px) {
    padding: 1rem;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Line = styled.div`
border-left: 0.375rem solid #62D2A2;
height: 100%;
border-radius: 0.125rem;
padding: 1rem 0 2rem 1rem;
margin: 2rem 0 4rem 0;
`;