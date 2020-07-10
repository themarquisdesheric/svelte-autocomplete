import { findMatches, boldSearchLetters } from './utils'

describe('findMatches', () => {
  const options = ['Jorge Luis Borges', 'Voltaire', 'Oscar Wilde', 'Julio Cortazar', 'T.S. Eliot']

  it('should find matches', () => {
    const searchTerm = 'g'
    const result = findMatches(options, searchTerm)
    
    expect(result).toEqual(['Jorge Luis Borges'])
  })
  
  it('should find matches of mixed upper/lowercase', () => {
    const searchTerm = 'j'
    const result = findMatches(options, searchTerm)
    const expectedResult = ['Jorge Luis Borges', 'Julio Cortazar']
    
    expect(result).toEqual(expectedResult)
  })

  it('should not find a match', () => {
    const noMatchesHere = ['Marcel Proust']
    const searchTerm = 'Z'
    const result = findMatches(noMatchesHere, searchTerm)

    expect(result).toEqual([])
  })
  
  it('should return an empty array if search term includes question mark', () => {
    const hasAQuestionMark = 'oh god not one of these?'
    const result = findMatches(options, hasAQuestionMark)
    
    expect(result).toEqual([])
  })
})

describe('boldSearchLetters', () => {
  it('should wrap matching substrings in a <span> element', () => {
    const option = 'Julio Cortazar'
    const searchTerm = 'o'
    const expectedResult = 'Juli<span>o</span> C<span>o</span>rtazar'
    const result = boldSearchLetters(option, searchTerm)

    expect(result).toBe(expectedResult)
  })
})
