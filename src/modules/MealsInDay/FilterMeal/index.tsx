import "modules/MealsInDay/FilterMeal/index.scss"

export const FilterMeal = () => {
  return (
    <div className="filter-meal-container">
      <p className="meal morning"><span>Morning</span></p>
      <p className="meal lunch"><span>Lunch</span></p>
      <p className="meal dinner"><span>Dinner</span></p>
      <p className="meal snack"><span>Snack</span></p>
    </div>
  )
}