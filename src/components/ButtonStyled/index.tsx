import { Button } from "react-bootstrap"

import "components/ButtonStyled/index.scss"

type TButton = {
  className?: string
  label: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}
export const ButtonStyled = (props: TButton) => {
  const { className, label, type = "button", onClick } = props

  let clsName = "my-btn"
  if (className) {
    clsName += ` ${className}`
  }

  return (
    <Button className={clsName} type={type} onClick={onClick}>
      {label}
    </Button>
  )
}
