import '@testing-library/jest-dom'

import { HomeTitle } from './index'
import { render } from '@testing-library/react'

it('renders correctly', () => {
  const { asFragment } = render(<HomeTitle />)
  expect(asFragment()).toMatchSnapshot()
})
