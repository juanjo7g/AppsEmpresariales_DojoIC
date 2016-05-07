'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('should be my name (Juan)', function () {
    appempic.getName().should.equal('Juan');
  });
  it('should be my last name (Martínez)', function () {
    appempic.getLastName().should.equal('Martínez');
  });

});
