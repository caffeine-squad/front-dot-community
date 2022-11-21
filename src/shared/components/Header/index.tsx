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


export function Header() {
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
            <NavItem>
              <NavLink to='/forum'><span>Forum</span></NavLink>
            </NavItem>
              <NavItem>
                <NavLink to='/cadastro'><span>Cadastro</span></NavLink>
              </NavItem>
           
            <NavItem>
              <NavLink to='/login'><span>Login</span></NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Container>
    </>
  )
}
