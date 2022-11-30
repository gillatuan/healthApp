import { Logo } from "./logo"
import { Nav } from "./Nav"
import { Account } from "./account"
import { Button, Container } from "react-bootstrap"

import "layouts/header/index.scss"
import { ButtonStyled } from "components/ButtonStyled"

export const Header = () => (
  <div className="header">
    <Container>
      <div className="flex">
        <Logo />
        <div className="right-column">
          <Nav />
          <Account />
          <ButtonStyled className="hamburger">
            <i className="icon-hamburger" />
          </ButtonStyled>
        </div>
      </div>
    </Container>
  </div>
)
