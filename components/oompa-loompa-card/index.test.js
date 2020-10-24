import '@testing-library/jest-dom'

import { OompaLoompaCard } from './index'
import { render } from '@testing-library/react'

import data from '../../__mocks__/data'

it('renders correctly', () => {
  const oompaLompa = data.results[0]
  const Component = () => (
    <OompaLoompaCard
      image={oompaLompa.image}
      firstName={oompaLompa.first_name}
      lastName={oompaLompa.last_name}
      gender={oompaLompa.gender}
      profession={oompaLompa.profession} />
  )
  const { asFragment } = render(<Component />)
  expect(asFragment()).toMatchSnapshot()
})
