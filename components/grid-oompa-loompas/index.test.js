import '@testing-library/jest-dom'

import { GridOompaLoompas } from './index'
import { render } from '@testing-library/react'

import data from '../../__mocks__/data'

it('renders correctly', () => {
  const { asFragment } = render(<GridOompaLoompas data={data} />)
  expect(asFragment()).toMatchSnapshot()
})
