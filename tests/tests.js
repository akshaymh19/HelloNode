/**
 * Created by akshay on 23/8/15.
 * Description : Learning to write tests
 */


var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('Should have mocha installed and running.', function () {
        assert.equal(true, true);
    });
    it('Should have mocha installed and running.', function () {
        assert.equal(true, true);
    });
    it('should have the should library installed and runnning for fluent testing', function () {
        true.should.eql(true);
    })
})