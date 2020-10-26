export const parseGender = gender => {
  switch (gender) {
    case 'F':
      return 'Woman'
    case 'M':
      return 'Man'
    default:
      return 'Android'
  }
}
