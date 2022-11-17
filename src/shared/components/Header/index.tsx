import {
  Bolder,
  Container,
  Heading,
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLink
}
  from "./styles";

import { Link } from "react-router-dom"

export function Header() {
  return (
    <>
      <Container>
        <Link to="/">
          <Heading>
            <Bolder>DOT</Bolder> Community
          </Heading>
        </Link>
        <NavbarContainer>
          <NavMenu>
            <NavItem>
              <NavLink to='/cadastro'><span>Sobre nós</span></NavLink>
            </NavItem>
            <NavItem>
              <span>Forum</span>
            </NavItem>
            <NavItem>
              <span>Cadastro</span>
            </NavItem>
            <NavItem>
              <span>Login</span>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Container>
    </>
  )
}
