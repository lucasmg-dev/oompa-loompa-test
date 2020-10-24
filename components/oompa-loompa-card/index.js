import propTypes from 'prop-types'
import styles from './styles.module.css'

export const OompaLoompaCard = ({
  image, firstName, lastName, gender, profession
}) => (
  <article>
    <figure className={styles.figure}>
      <img src={image} className={styles.image}/>
    </figure>
    <h2 className={styles.name}>{firstName} {lastName}</h2>
    <span className={styles.gender}>{ gender === 'F' ? 'Woman' : 'Man' }</span>
    <h3 className={styles.profession}>{ profession }</h3>
  </article>
)

OompaLoompaCard.propTypes = {
  image: propTypes.string.isRequired,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  gender: propTypes.string.isRequired,
  profession: propTypes.string.isRequired
}
