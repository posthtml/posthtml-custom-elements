module.exports = function posthtmlCustomElements (options = {}) {
  const defaultTag = options.defaultTag || 'div'
  const skipTags = options.skipTags || []

  return function (tree) {
    return tree.map((node) => {
      // if it's not a tag, skip
      if (node.type !== 'tag') return node

      // if its a standard tag or skipped, skip
      if (node.name in skipTags || node.name in htmlTags) return node

      // look for a class attribute
      if (!node.attrs) { node.attrs = {} }
      if (!node.attrs.class) { node.attrs.class = [] }

      // if there is a class attribute, push the new class name
      node.attrs.class = Array.prototype.concat(node.attrs.class)
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
