[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]

<div align="center">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Custom Elements Plugin</h1>
  <p>Use custom elements now!</p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-custom-elements
```

<h2 align="center">Usage</h2>

```js
const posthtml = require('posthtml')

const custom = require('posthtml-custom-elements')

const component = `<my-component>
                    <text-h1 class="text">Text</text-h1>
                    <ul>
                      <custome tag="li">list</custome>
                    </ul>
                  </my-component>`

posthtml([ custom({ defaultTag: 'span' }) ])
    .process(component)
    .then((result) => console.log(result.html))
```

```html
<span class="my-component">
  <span class="text-h1 text">Text</span>
  <ul>
    <li>list</li>
  </ul>
</span>
```

## Options

#### `defaultTag`

__Default__: `div`

Tag is used to replace the custom tag

*Options* `{ defaultTag: 'span' }`

```html
<custom>Test</custom>
```

```html
<span class="custom">Test</span>
```

#### `skipTags`

__Default__: `[]`

Skip HTML5 tag

*Options* `{ skipTags: ['header'] }`

```html
<header>Test</header>
```

```html
<div class="header">Test</div>
```

## Support

#### `attribute tag`

```html
<custome tag="pre">Test</custome>
```

```html
<pre>Test</pre>
```

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) 2016 PostHTML Ivan Voischev

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-custom-elements.svg
[npm-url]: https://npmjs.com/package/posthtml-custom-elements

[deps]: https://david-dm.org/posthtml/posthtml-custom-elements.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-custom-elements

[travis]: http://img.shields.io/travis/posthtml/posthtml-custom-elements.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-custom-elements

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-custom-elements/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-custom-elements?branch=master
