import '@testing-library/jest-dom'

import { SearchForm } from './index'
import { render } from '@testing-library/react'

it('renders correctly', () => {
  const { asFragment } = render(<SearchForm handleFilter={() => {}}/>)
  expect(asFragment()).toMatchSnapshot()
})
