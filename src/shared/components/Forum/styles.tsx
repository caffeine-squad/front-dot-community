import styles from "styled-components"

export const Container = styles.div`
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
`