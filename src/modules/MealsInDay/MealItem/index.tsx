import "modules/MealItems/MealItem/index.scss"
import { Figure } from "react-bootstrap"

type TMEALITEM = {
  datetime: string
  image: string
  info?: string
  tags?: string[]
}

export const MealItem = (props: TMEALITEM) => {
  const { datetime, image, info, tags } = props

  const generateTags = () => {
    if (!tags) {
      return []
    }
    return tags.map((tag: string, i: number) => (
      <a key={`tag-${i}`} href={`#${tag}`}>
        {tag}
      </a>
    ))
  }

  return (
    <div className="meal-element">
      <>
        <Figure>
          <Figure.Image alt="171x180" src={image} />
          <Figure.Caption className="datetime">
            <span>{datetime}</span>
          </Figure.Caption>
        </Figure>
        <p className="info">{info}</p>
        <p className="tags">{generateTags()}</p>
      </>
    </div>
  )
}
