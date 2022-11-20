import styled from "styled-components";

export const TextCardStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
color: #000;
width: 19.25rem;

span{
  font-weight: 600;
  color: #000;
  font-size: 1.125;
}

p
{
  font-size: 0.875rem;
  font-weight: 200;
  color: #1E1E1E;
  margin-bottom: 1.5rem;
}

a
{
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: underline;
  color: #1E1E1E;
  font-style: italic;

  :hover{
    transform: scale(1.1);
    transition: all 0.1s;
  }
}

@media (max-width:720px) {
  height: auto;
  width: 100wv;
  padding: 0;
}
`