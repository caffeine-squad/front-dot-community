import styled from "styled-components";

export const LoginSection = styled.section`
  display:flex;
  flex-direction: column;
  align-self:center;
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
border-radius: 0.125rem;
padding: 1rem 0 2rem 1rem;
margin: 2rem 0 4rem 0;
`;

export const ButtonLink = styled.button`
color: #29A073;
margin-left: 0.3rem;

`
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  a{
    color: black;
    text-decoration: none;
    display: block;
    padding: 12px 16px;
    &:hover{
      background-color: #62D2A2;
      color:black;
    }
  }
`
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
    
  &:hover ${DropDownContent}{
    display:block;
  }

`