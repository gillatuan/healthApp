import { NavLink } from "react-router-dom"

import "layouts/header/Nav/index.scss"

export const Nav = () => (
  <div className="nav">
    <li>
      <i className="icon-memo" />
      <NavLink to="/column">自分の記録</NavLink>
    </li>
    <li>
      <i className="icon-challenge" />
      <NavLink to="/toppage">チャレンジ</NavLink>
    </li>
    <li>
      <i className="icon-info" />
      <NavLink to="/message">お知らせ</NavLink>
    </li>
  </div>
)
