import { Figure } from "react-bootstrap"

import "modules/DateAchievement/index.scss"

type TDATEACHIVEMENT = {
  datetime: string
  image: string
  percentage: string
}
export const DateAchievement = (props: TDATEACHIVEMENT) => {
  const { datetime, image, percentage } = props

  return (
    <div className="date-achievement">
      <Figure>
        <Figure.Image alt="171x180" src={image} />
        <div className="caption-container">
          <Figure.Caption className="datetime">
            <span>{datetime}</span>
          </Figure.Caption>
          <Figure.Caption className="percentage">
            <span>{percentage}</span>
          </Figure.Caption>
        </div>
      </Figure>
      <div className="set-size charts-container">
        <div className="pie-wrapper progress-75">
          <div className="pie">
            <div className="left-side half-circle"></div>
            <div className="right-side half-circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
