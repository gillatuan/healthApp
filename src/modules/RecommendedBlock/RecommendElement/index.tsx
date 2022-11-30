import 'modules/RecommendedBlock/RecommendElement/index.scss'

type TRECOMMENDELEMENT = {
  name: string
  subName: string
}

export const RecommendElement = (props: TRECOMMENDELEMENT) => {
  const { name, subName } = props

  return (
    <div className="recommend-element">
      <p className="name">{name}</p>
      <hr />
      <p className="sub-name">{subName}</p>
    </div>
  )
}
