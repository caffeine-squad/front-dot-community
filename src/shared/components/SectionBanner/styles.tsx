import styled from "styled-components";

export const SectionBannerStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-beetwen;
  width: 100%;
  margin-bottom: 1.875rem;
  
  h4{
    margin: auto;
    text-decoration: none;
    padding-top: 1.875rem;
    margin-bottom: 1.5rem;
  }
  
  .display-direction{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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