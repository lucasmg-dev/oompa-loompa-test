import propTypes from 'prop-types'
import { OompaLoompaCard } from '../oompa-loompa-card'
import styles from './styles.module.css'

export const GridOompaLoompas = ({ data }) => {
  return (
    <section>
      <div className='wrapper'>
        {data.length < 1 && (
          <div className={styles.notFound}>
            <p className={styles.notFoundText}>No se han encontrado resultados</p>
          </div>
        )}
        {data.length > 0 && (
          <div className={styles.grid}>
            {data.map(
              ({ id, image, first_name: firstName, last_name: lastName, gender, profession }) => (
                <OompaLoompaCard
                  key={id}
                  id={id}
                  image={image}
                  firstName={firstName}
                  lastName={lastName}
                  gender={gender}
                  profession={profession} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  )
}

GridOompaLoompas.propTypes = {
  data: propTypes.array
}
