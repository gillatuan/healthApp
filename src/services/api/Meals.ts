import { listMeals } from "mockup/meals"
import { FullResponse } from "services/api/api.d"
import { IMealResponse } from "services/api/Meals.d"

export const getMealsInDay = async (): Promise<FullResponse<IMealResponse>> => {
  return {
    code: "200",
    data: listMeals,
    message: "Success",
    result: true,
    technicalMessage: "",
  }
}
