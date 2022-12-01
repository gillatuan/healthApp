import { Logo } from "./logo"
import { Nav } from "./Nav"
import { Container } from "react-bootstrap"

import "layouts/header/index.scss"
import { ButtonStyled } from "components/ButtonStyled"

export const Header = () => (
  <div className="header">
    <Container>
      <div className="flex">
        <Logo />
        <div className="right-column">
          <Nav />
          <ButtonStyled className="hamburger">
            <i className="icon-hamburger" />
          </ButtonStyled>
        </div>
      </div>
    </Container>
  </div>
)
