import propTypes from 'prop-types'
import styles from './styles.module.css'

import searchIcon from '../../static/images/ic_search.png'

export const SearchForm = ({ term, handleFilter }) => {
  return (
    <div className={styles.searchNav}>
      <div className='wrapper'>
        <form className={styles.searchForm}>
          <div className={styles.searchFormGroup}>
            <input
              type='text'
              value={term}
              placeholder='Search'
              className={styles.searchInput}
              onKeyUp={(ev) => handleFilter(ev.target.value)}/>
            <div className={styles.searchIcon}>
              <img src={searchIcon} width='15' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

SearchForm.propTypes = {
  term: propTypes.string,
  handleFilter: propTypes.func.isRequired
}
