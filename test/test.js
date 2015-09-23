/* jshint mocha: true, maxlen: false */
var posthtml = require('posthtml');
var custom = require('../index.js');
var expect = require('chai').expect;

function test(html, referense, options, done) {
    expect(posthtml([custom(options)])
        .process(html)
        .then(function(result) {
            expect(referense).to.eql(result.html);
            done();
        }).catch(function(error) {
            done(error);
        }));
}

describe('Custom Elements test', function() {
    describe('DOM', function() {
        it('Simple test', function(done) {
            var html = '<custom>Test</custom>';
            var referense = '<div class="custom">Test</div>';
            test(html, referense, {}, done);
        });

        it('Class', function(done) {
            var html = '<custom class="test">Test</custom>';
            var referense = '<div class="custom test">Test</div>';
            test(html, referense, {}, done);
        });

        it('Class inside', function(done) {
            var html = '<custom class="custom">Test</custom>';
            var referense = '<div class="custom">Test</div>';
            test(html, referense, {}, done);
        });
    });

    describe('Options', function() {
        it('undefined', function(done) {
            var html = '<div>Test</div>';
            var referense = '<div>Test</div>';
            test(html, referense, undefined, done);
        });

        it('defaultTag', function(done) {
            var html = '<custom class="custom">Test</custom>';
            var referense = '<span class="custom">Test</span>';
            test(html, referense, { defaultTag: 'span'}, done);
        });

        it('skipTags', function(done) {
            var html = '<header class="custom">Test</header>';
            var referense = '<div class="header custom">Test</div>';
            test(html, referense, { skipTags: ['header']}, done);
        });
    });
});

