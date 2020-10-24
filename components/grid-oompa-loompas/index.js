import propTypes from 'prop-types'
import { OompaLoompaCard } from '../oompa-loompa-card'
import styles from './styles.module.css'

export const GridOompaLoompas = ({ data }) => {
  return (
    <section>
      <div className='wrapper'>
        <div className={styles.grid}>
          {data.results.map(
            ({ id, image, first_name: firstName, last_name: lastName, gender, profession }) => (
              <OompaLoompaCard
                key={id}
                image={image}
                firstName={firstName}
                lastName={lastName}
                gender={gender}
                profession={profession} />
            )
          )}
        </div>
      </div>
    </section>
  )
}

GridOompaLoompas.propTypes = {
  data: propTypes.object
}
