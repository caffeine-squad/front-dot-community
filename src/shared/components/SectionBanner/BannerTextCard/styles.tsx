import styled from "styled-components";

export const BannerTextCardStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
color: #000;
width: 24.063rem;

h4{
  font-weight: 800;
  color: #000;
  font-size: 1.5;
  text-decoration: none;
  margin-bottom: 1.5rem;
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

@media (max-width:920px) {
  flex-direction: column;
  justify-content: start;

  .display-direction{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
}

@media (max-width:720px) {
  height: auto;
  width: 100wv;
  padding: 0;
}
`