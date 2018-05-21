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

        it('Simple test custom camel case tag', function(done) {
            var html = '<customTag>Test</customTag>';
            var referense = '<div class="customTag">Test</div>';
            test(html, referense, {}, done);
        });

        it('Simple test custom camel case tag include attribute', function(done) {
            var html = '<customTag name="tset">Test</customTag>';
            var referense = '<div name="tset" class="customTag">Test</div>';
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

        it('Class inside', function(done) {
            var html = '<cuStom class="custom">Test</custom>';
            var referense = '<div class="cuStom custom">Test</div>';
            test(html, referense, {}, done);
        });

        it('Attrs tags', function(done) {
            var html = '<custom tag="li" class="custom">Test</custom>';
            var referense = '<li class="custom">Test</li>';
            test(html, referense, {}, done);
        });

        it('Tags', function(done) {
            var html = '<header class="custom">Test</header>';
            var referense = '<header class="custom">Test</header>';
            test(html, referense, {}, done);
        });

        it('Camel Tags', function(done) {
            var html = '<heaDer class="custom">Test</header>';
            var referense = '<header class="custom">Test</header>';
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

it('Class inside', function(done) {
            var html = '<cuStom class="custom">Test</custom>';
            var referense = '<div class="cuStom custom">Test</div>';
            test(html, referense, {}, done);
        });
        it('skipTags', function(done) {
            var html = '<header class="custom">Test</header>';
            var referense = '<header class="custom">Test</header>';
            test(html, referense, { skipTags: ['header']}, done);
        });
    });
});

