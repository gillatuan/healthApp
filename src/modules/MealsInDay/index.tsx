import { Col, Container, Row } from "react-bootstrap"

import "modules/MealsInDay/index.scss"
import { MealItem } from "./MealItem"
import { ButtonStyled } from "components/ButtonStyled"

export const MealsInDay = () => {
  return (
    <Row className="gx-2">
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/m01.jpg" />
      </Col>
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/l03.jpg" />
      </Col>
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/d01.jpg" />
      </Col>
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/l01.jpg" />
      </Col>
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/m01.jpg" />
      </Col>
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/l02.jpg" />
      </Col>
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/d02.jpg" />
      </Col>
      <Col xs={3}>
        <MealItem datetime="2021.05.17 23:25" image="/images/s01.jpg" />
      </Col>
    </Row>
  )
}
