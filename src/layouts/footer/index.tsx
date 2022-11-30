import { Container } from "react-bootstrap"

import "layouts/footer/index.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <ul>
          <li>
            <a href="/">会員登録</a>
          </li>
          <li>
            <a href="/">運営会社</a>
          </li>
          <li>
            <a href="/">利用規約</a>
          </li>
          <li>
            <a href="/">個人情報の取扱について</a>
          </li>
          <li>
            <a href="/">特定商取引法に基づく表記</a>
          </li>
          <li>
            <a href="/">お問い合わせ</a>
          </li>
        </ul>
      </Container>
    </div>
  )
}
