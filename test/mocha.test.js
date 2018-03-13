// TESTING WITH MOCHA AND USING CHAI AS AN ASSERTION LIBRARY

const { assert } = require('chai')
const { hello, add } = require('../app')

describe('App.js', () => {

  describe('hello()', () => {
    it('should return Hello, World!!', () => 
      assert.equal(hello(), 'Hello, World!!')
    )

    it('should return string type', () => 
      assert.typeOf(hello(), 'string')
    )
  })
  
  describe('add()', () => {
    it('2+3 should return 5', () => 
      assert.equal(add(2,3), 5)
    )

    it('should return number type', () => 
      assert.typeOf(add(1,2), 'number')
    )
  })

})