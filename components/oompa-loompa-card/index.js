import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const OompaLoompaCard = ({
  id, image, firstName, lastName, gender, profession
}) => (
  <article>
    <Link href={`/${id}`}>
      <a>
        <figure className={styles.figure}>
          <img src={image} className={styles.image}/>
        </figure>
      </a>
    </Link>
    <Link href={`/${id}`}>
      <a>
        <h2 className={styles.name}>{firstName} {lastName}</h2>
        <span className={styles.gender}>{ gender === 'F' ? 'Woman' : 'Man' }</span>
        <h3 className={styles.profession}>{ profession }</h3>
      </a>
    </Link>
  </article>
)

OompaLoompaCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
}
