# posthtml-custom-elements plugin
[![npm version](https://badge.fury.io/js/posthtml-custom-elements.svg)](http://badge.fury.io/js/posthtml-custom-elements)

Use HTML custom elements now!

## Usage
```javascript
var posthtml = require('posthtml'),
    customElements = require('posthtml-custom-elements'),
    myCustomElementHTML = '<my-component><my-text class="text">Text</my-text></my-component>',
    options = { defaultTag: 'span' };

posthtml()
    .use(customElements(options))
    .process(myCustomElementHTML)
    .then(function(result) {
        console.log(result.html);
        // <span class="my-component"><span class="my-text text">Text</span></span>
    })
```

## Options
#### `defaultTag`
__Default__: `div`

Tag is used to replace tag custom element

*Options* `{ defaultTag: 'span' }`

```html
Input: <custom>Test</custom>
Output: <span class="custom">Test</span>
```

#### `skipTags`
__Default__: `[]`

Skip html5 tag for parse

*Options* `{ skipTags: ['header'] }`

```html
Input: <header>Test</header>
Output: <div class="header">Test</div>
```
