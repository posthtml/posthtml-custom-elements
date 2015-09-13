/* jshint mocha: true, maxlen: false */
var posthtml = require('../build/index.js');
var custom = require('../index.js');
var expect = require('chai').expect;

function test(html, referense, done) {
    expect(posthtml([custom({})])
        .process(html)
        .then(function(result) {
            expect(referense).to.eql(result.html);
            done();
        }).catch(function(error) {
            done(error);
        }));
}

describe('Custom Elements test', function() {
    it('test', function(done) {
        var html = '<custom></custom>';
        var referense = '<div class="custom"></div>';
        test(html, referense, done);
    });
});

