import '@testing-library/jest-dom'

import { Header } from './index'
import { render } from '@testing-library/react'

it('renders correctly', () => {
  const { asFragment } = render(<Header />)
  expect(asFragment()).toMatchSnapshot()
})
