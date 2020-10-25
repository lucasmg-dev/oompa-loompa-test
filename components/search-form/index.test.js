import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/dom'

import { SearchForm } from './index'
import { render, screen } from '@testing-library/react'

const onKeyUp = jest.fn()

it('renders correctly', () => {
  const { asFragment } = render(<SearchForm handleFilter={onKeyUp} />)
  expect(asFragment()).toMatchSnapshot()
})

it('call filter handler', () => {
  render(<SearchForm handleFilter={onKeyUp} />)
  fireEvent.keyUp(screen.getByPlaceholderText('Search'))
  expect(onKeyUp).toHaveBeenCalledTimes(1)
})
