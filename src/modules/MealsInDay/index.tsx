import { Col, Row } from "react-bootstrap"

import { MealItem } from "./MealItem"
import { ButtonStyled } from "components/ButtonStyled"

import { FilterMeal } from "./FilterMeal"

import "modules/MealsInDay/index.scss"

export const MealsInDay = () => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={9}>
          <FilterMeal />
        </Col>
      </Row>
      <Row className="gx-2" style={{ marginTop: 25 }}>
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

      <Row className="gx-2">
        <Col xs={12}>
          <div className="button-container">
            <ButtonStyled children="コラムをもっと見る" />
          </div>
        </Col>
      </Row>
    </>
  )
}
