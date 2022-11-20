import styled from "styled-components";

export const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  h4{
    margin: auto;
    text-decoration: underline;
    padding-top: 1.875rem;
  }
  
  .display-direction{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  

  @media (max-width:720px) {
    flex-direction: column;
    justify-content: start;
    height: auto;
    width: 100wv;
    padding: 0 1rem;

    .display-direction{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
    }

  }
`;