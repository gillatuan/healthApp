import { Logo } from "./logo"
import { Nav } from "./Nav"
import { Account } from "./account"
import { Container } from "react-bootstrap"

import "layouts/header/index.scss"

export const Header = () => (
  <div className="header">
    <Container>
      <div className="flex">
        <Logo />
        <div className="right-column">
          <Nav />
          <Account />
        </div>
      </div>
    </Container>
  </div>
)
