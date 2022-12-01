import { Col, Container, Row } from "react-bootstrap"

import { BodyGraph } from "modules/BodyGraph"
import { DateAchievement } from "modules/DateAchievement"

import "pages/TopPage/index.scss"
import { MealsInDay } from "modules/MealsInDay"

export default function TopPage() {
  return (
    <div className="top-page">
      <Container fluid className="gx-0 achievement-bodygraph">
        <Row className="gx-0">
          <Col xs={4}>
            <DateAchievement
              datetime="05/21"
              image="/images/d01.jpg"
              percentage="75%"
            />
          </Col>
          <Col xs={8}>
            <BodyGraph />
          </Col>
        </Row>
      </Container>

      <div className="meals-block">
        <MealsInDay />
      </div>
    </div>
  )
}
