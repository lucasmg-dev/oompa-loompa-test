import style from './styles.module.css'

import logo from '../../static/images/logo-umpa-loompa.png'

export const Header = () => (
  <header className={style.header}>
    <nav className={`wrapper ${style.wrapper}`}>
      <img src={logo} className={style.logo} />
      <h1 className={style.title}>Oompa Loompa&apos;s Crew</h1>
    </nav>
  </header>
)
