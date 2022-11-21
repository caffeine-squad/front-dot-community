import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.563rem;
  background: #62D2A2;

  @media (max-weight:650px) {
    height: 60px;
}
`;

export const Heading = styled.h1`
  font-weight: 400;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Bolder = styled.b`
  font-weight: 600;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 53%;
  margin: 0 0 0 5%;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: 8vw;
  @media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    transition: all 0.6s ease;
  }
`;

export const NavLink = styled(Link)`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
  `
;

export const NavItem = styled.li`
  height: auto;
  border-bottom: 2px solid transparent;
  position: relative;
  left: 5rem;
  padding: 0 1rem;
  span {
    display: block;
    width: 100%;
    position: relative;
    transition: 200ms;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  span:before {
    content: "";
    width: 0px;
    height: 3px;
    position: absolute;
    top: 32px;
    background-color: #FFE74C;
    border-radius: 2px;
    transition: 400ms;
  }
  span:hover:before {
    width: 100%;
    color:white
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;



