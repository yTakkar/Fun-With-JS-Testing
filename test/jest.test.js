// TESTING WITH JEST

const { hello, add } = require('../app')

describe('hello() fn', () => {

  it('should return Hello, World!!', () => 
    expect(hello()).toEqual('Hello, World!!')
  )

  it('should return string', () => 
    expect(typeof hello()).toBe('string')
  )

})

describe('add() fn', () => {

  it('add(1,2) should return 3', () => 
    expect(add(1,2)).toEqual(3)
  )

  it('add() should return number', () => 
    expect(typeof add(1,2)).toBe('number')
  )

})