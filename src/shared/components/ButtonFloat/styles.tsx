import styled from "styled-components"

export const ButtonFloating = styled.button` 
  display: inline-block;  
  padding: 0.8em 1.2em;    
  background-color:#FFE74C;  
  text-decoration: none;  
  border-radius:50px;
  -webkit-transition-duration: 0.4s;  
  transition-duration: 0.4s;  
  -webkit-transition-property: -webkit-transform;  
  transition-property: transform;  
  -webkit-transform: translateZ(0);  
  -ms-transform: translateZ(0);  
  transform: translateZ(0);  
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.05) 0px 10px 15px -5px,rgba(0, 0, 0, 0.04) 0px 7px 7px -5px;
  position: fixed;
  right: 0;
  margin-right: 1.5rem;
  bottom: 0px;
  margin-bottom: 1.5rem;

  &:hover{
    -webkit-transform: translateY(-5px);  
    -ms-transform: translateY(-5px);  
    transform: translateY(-5px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.05) 0px 10px 15px -5px,rgba(0, 0, 0, 0.04) 0px 7px 7px -5px;
  }
`