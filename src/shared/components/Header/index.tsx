import {
  Bolder,
  Container,
  Heading,
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLink,
}
  from "./styles";

import { useAuth } from "../../context/useAuth";


export function Header() {
  const { authenticated, logout } = useAuth();
  return (
    <>
      <Container>
        <NavLink to="/">
          <Heading>
            <Bolder>DOT</Bolder> Community
          </Heading>
        </NavLink>
        <NavbarContainer>
          <NavMenu>
            <NavItem>
              <NavLink to='/'><span>Sobre nós</span></NavLink>
            </NavItem>
            {authenticated === true ?
              <NavItem>
                <NavLink to='/forum'><span>Forum</span></NavLink>
              </NavItem>
              :
              <></>
            }
            <NavItem>
              <NavLink to='/cadastro'><span>Cadastro</span></NavLink>
            </NavItem>

            <NavItem>
              {authenticated === false ? <NavLink to='/login'><span>Login</span></NavLink> :
                <NavLink to='/login' onClick={logout}><span>Sair</span></NavLink>
              }

            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Container>
    </>
  )
}
