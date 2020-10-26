import Link from 'next/link'
import style from './styles.module.css'

import logo from '../../static/images/logo-umpa-loompa.png'

export const Header = () => (
  <header className={style.header}>
    <nav className={`wrapper ${style.wrapper}`}>
      <Link href='/'>
        <a>
          <img src={logo} className={style.logo} />
          <span className={style.title}>Oompa Loompa&apos;s Crew</span>
        </a>
      </Link>
    </nav>
  </header>
)
