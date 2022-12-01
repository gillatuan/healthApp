import { Col, Container, Row } from "react-bootstrap"

import { RecommendElement } from "modules/RecommendedBlock/RecommendElement"

import "modules/RecommendedBlock/index.scss"

export const RecommendedBlock = () => {
  return (
    <Row>
      <Col xs={3}>
        <RecommendElement name="Recommended Column" subName="sub name" />
      </Col>
      <Col xs={3}>
        <RecommendElement name="Recommended Column" subName="sub name" />
      </Col>
      <Col xs={3}>
        <RecommendElement name="Recommended Column" subName="sub name" />
      </Col>
      <Col xs={3}>
        <RecommendElement name="Recommended Column" subName="sub name" />
      </Col>
    </Row>
  )
}
