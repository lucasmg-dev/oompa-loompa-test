import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { parseGender } from '../../utils/oompa-loompa'

export const OompaLoompaDetail = ({
  image,
  firstName,
  lastName,
  gender,
  profession,
  description
}) => (
  <section className={styles.section}>
    <div className='wrapper'>
      <article className={styles.article}>
        <div className={styles.imageContainer}>
          <figure className={styles.figure}>
            <img src={image} className={styles.image}/>
          </figure>
        </div>
        <div className={styles.data}>
          <h2 className={styles.name}>{firstName} {lastName}</h2>
          <span className={styles.gender}>{parseGender(gender)}</span>
          <h3 className={styles.profession}>{profession}</h3>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </article>
    </div>
  </section>
)

OompaLoompaDetail.propTypes = {
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
