import { Col, Row } from "react-bootstrap"

import { MealItem } from "./MealItem"
import { ButtonStyled } from "components/ButtonStyled"

import { FilterMeal } from "./FilterMeal"

import "modules/MealsInDay/index.scss"
import { useEffect, useState } from "react"
import { getMealsInDay } from "services/api/Meals"
import { TMeal } from "services/api/Meals.d"

export const MealsInDay = () => {
  const [items, setItems] = useState<TMeal[]>([])

  useEffect(() => {
    const fetchItems = async (): Promise<void> => {
      const response = await getMealsInDay()
      if (response.result) {
        setItems(response.data)
      }
    }

    fetchItems()
  }, [])

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={9}>
          <FilterMeal />
        </Col>
      </Row>
      <Row className="gx-2" style={{ marginTop: 25 }}>
        {items.map((item, k) => {
          return (
            <Col xs={3} key={item.slug}>
              <MealItem datetime={item.datetime} image={`images/${item.image}`} />
            </Col>
          )
        })}
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
