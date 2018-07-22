const assert = require('chai').assert;

const app = require('../app');
const index = require('../app');

welcomePlayerResult = app.welcomePlayer();
numbPowersResult = app.numbPowers();
xpGainedResult = app.xpGained();




describe('welcomePlayer()', function(){
  it('welcomePlayer should display a string', function(){
    assert.typeOf(welcomePlayerResult, 'string');
  });
});

describe('numbPowers()', function(){
  it('numbPowers should return bool', function(){
    assert.isTrue(numbPowersResult, 'is true');

  });
});
describe('xpGained()', function(){
  it('xpGained should return bool', function(){
    assert.isNotTrue(xpGainedResult, 'is false');

  });
});
