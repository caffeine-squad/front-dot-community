import styled from "styled-components";

export const Container = styled.footer`
display: flex;
justify-content: center;
align-items: center;
width:100%;
bottom:0;
padding: 1.25rem 1.563rem;
background: #62D2A2;

h1{
  font-weight: 600;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
}

@media (max-weight:650px) {
  height: 60px;
}
`