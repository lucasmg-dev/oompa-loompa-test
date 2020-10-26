import { parseGender } from './oompa-loompa'

it('return Man', () => {
  const parsed = parseGender('M')
  expect(parsed).toBe('Man')
})

it('return Woman', () => {
  const parsed = parseGender('F')
  expect(parsed).toBe('Woman')
})

it('return default Android', () => {
  const parsed = parseGender('Incorrect')
  expect(parsed).toBe('Android')
})
