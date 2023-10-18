import React from 'react'
import {Link} from 'react-router-dom'
import s from '../../styles/Header.module.css'
import {ROUTES} from '../../utils/routes'
import LOGO from '../../images/logo.svg'
import AVATAR from '../../images/avatar.jpg'
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="tuff" />
        </Link>
      </div>
      <div className={s.info}>

        <div className={s.user}>
          <div className={s.avatar} style={{backgroundImage: `url(${AVATAR})`}} />
          <div className={s.username}>AG</div>
        </div>

      </div>
    </div>
  )
}

export default Header
