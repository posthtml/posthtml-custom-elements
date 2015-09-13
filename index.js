module.exports = function(options) {

    return function(tree) {
        tree.walk(function(node) {
            if(node.tag) {
                var cl = node.tag;
                node.tag = 'div';
                node.attrs ?
                    node.attrs.class = node.attrs.class + ' ' + cl :
                    node.attrs = { class: cl };
            }
            return node;
        });
        return tree;
    };
};
