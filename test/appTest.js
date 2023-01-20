const assert = require('chai').assert
// const sayHello = require('../app').sayHello
// const addNumbers = require('../app').addNumbers

const app = require('../app')



describe('App', function(){
    it('sayHello should return "hello"', function(){
        let result = app.sayHello()
        assert.equal(result, 'hello')
    })

    it('sayHello should return type string', function(){
        let result = app.sayHello()
        // assert.equal(typeof(result), 'string')
        assert.typeOf(result,'string' )
    })
    
    it('addNumbers should be above 5', function(){
        let result = app.addNumbers(5,6)
        assert.isAbove(result, 10)
    })

    it('addNumbers return type number', function(){
        let result = app.addNumbers(5,6)
        assert.typeOf(result,'number' )
    })
})