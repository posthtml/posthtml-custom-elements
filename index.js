const {modifyNodes} = require('posthtml-plugin-util')

module.exports = function posthtmlCustomElements (options = {}) {
  const defaultTag = options.defaultTag || 'div'
  const skipTags = options.skipTags || []

  return function (tree) {
    return modifyNodes(tree, (node) => {
      return (node.type === 'tag' && (htmlTags.indexOf(node.name) < 0 || skipTags.indexOf(node.name) > -1))
    }, (node) => {
      // look for a class attribute
      if (!node.attrs) { node.attrs = {} }
      if (!node.attrs.class) { node.attrs.class = [] }

      // if there's already the same class, return
      if (node.attrs.class.find((n) => n.content === node.name)) {
        node.name = defaultTag
        return node
      }

      // if there is already a class, add a space
      if (node.attrs.class.length > 0) {
        node.attrs.class.push({
          type: 'text',
          content: ' ',
          location: node.location
        })
      }

      // push the new class name
      node.attrs.class.push({
        type: 'text',
        content: node.name,
        location: node.location
      })

      // set the name to the default and return
      node.name = defaultTag
      return node
    })
  }
}

const htmlTags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr']
