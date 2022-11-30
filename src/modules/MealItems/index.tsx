import { Button, Col, Container, Row } from "react-bootstrap"

import "modules/MealItems/index.scss"
import { MealItem } from "./MealItem"
import { ButtonStyled } from "components/ButtonStyled"

export const MealItems = () => {
  return (
    <div className="meals-block">
      <Container>
        <Row className="gx-2">
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-1.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-2.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-3.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-4.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-5.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-6.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-7.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
          <Col xs={3}>
            <MealItem
              datetime="2021.05.17 23:25"
              image="/images/column-8.jpg"
              info="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
              tags={["魚料理", "和食", "DHA"]}
            />
          </Col>
        </Row>
        <div className="button-container">
          <ButtonStyled children="コラムをもっと見る" />
        </div>
      </Container>
    </div>
  )
}
