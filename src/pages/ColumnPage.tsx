import { Container } from "react-bootstrap"

import { MealItems } from "modules/MealItems"
import { RecommendedBlock } from "modules/RecommendedBlock"

export default function ColumnPage() {
  return (
    <>
      <Container>
        <div className="recommend-block">
          <RecommendedBlock />
        </div>
      </Container>

      <div className="meals-block">
        <Container>
          <MealItems />
        </Container>
      </div>
    </>
  )
}
