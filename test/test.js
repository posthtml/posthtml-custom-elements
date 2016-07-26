const posthtml = require('posthtml')
const test = require('ava')
const customElements = require('..')

test('Simple test', (t) => {
  const html = '<custom>Test</custom>'
  const expected = '<div class="custom">Test</div>'
  return compare(t, html, expected)
})

test('Simple test custome camel case tag', (t) => {
  const html = '<customTag>Test</customTag`'
  const expected = '<div class="customTag">Test</div>'
  return compare(t, html, expected)
})

test('Class', (t) => {
  const html = '<custom class="test">Test</custom>'
  const expected = '<div class="custom test">Test</div>'
  return compare(t, html, expected)
})

test('Class inside', (t) => {
  const html = '<custom class="custom">Test</custom>'
  const expected = '<div class="custom">Test</div>'
  return compare(t, html, expected)
})

test('Class inside', (t) => {
  const html = '<cuStom class="custom">Test</custom>'
  const expected = '<div class="cuStom custom">Test</div>'
  return compare(t, html, expected)
})

test('Tags', (t) => {
  const html = '<header class="custom">Test</header>'
  const expected = '<header class="custom">Test</header>'
  return compare(t, html, expected)
})

test('Camel Tags', (t) => {
  const html = '<heaDer class="custom">Test</header>'
  const expected = '<header class="custom">Test</header>'
  return compare(t, html, expected)
})

test('undefined', (t) => {
  const html = '<div>Test</div>'
  const expected = '<div>Test</div>'
  return compare(t, html, expected, undefined)
})

test('defaultTag', (t) => {
  const html = '<custom class="custom">Test</custom>'
  const expected = '<span class="custom">Test</span>'
  return compare(t, html, expected, { defaultTag: 'span' })
})

test('Class inside', (t) => {
  const html = '<cuStom class="custom">Test</custom>'
  const expected = '<div class="cuStom custom">Test</div>'
  return compare(t, html, expected)
})

test('skipTags', (t) => {
  const html = '<header class="custom">Test</header>'
  const expected = '<div class="header custom">Test</div>'
  return compare(t, html, expected, { skipTags: ['header'] })
})

function compare (t, html, expected, options = {}) {
  return posthtml({ plugins: [customElements(options)] })
    .process(html)
    .then((res) => { t.is(res.output, expected) })
}
