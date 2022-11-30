import { useContext } from "react"

import { LoginContext } from "context/loginContext"
import { RecommendedBlock } from "modules/RecommendedBlock"
import { MealItems } from "modules/MealItems"

export default function ColumnPage() {
  const { isLoggedIn } = useContext(LoginContext)

  return (
    <>
      <RecommendedBlock />
      <MealItems />
    </>
  )
}
