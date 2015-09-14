module.exports = function(options) {
    var defaultTag = options.defaultTag || 'div',
        skipTags = options.skipTags || [],
        html5tags = [
        'a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','blockquote',
        'body','br','button','canvas','caption','cite','code','col','colgroup','datalist','dd','del','details','dfn',
        'dialog','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form',
        'h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','img','input','ins','kbd','keygen',
        'label','legend','li','link','main','map','mark','menu','menuitem','meta','meter','nav','noscript','object',
        'ol','optgroup','option','output','p','param','pre','progress','q','rp','rt','ruby','s','samp',
        'script','section','select','small','source','span','strong','style','sub','summary','sup',
        'table','tbody','td','textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr'
    ];

    return function(tree) {
        tree.walk(function(node) {
            if(node.tag) {
                var tag = node.tag;

                if (skipTags.indexOf(tag) !== -1 || html5tags.indexOf(tag) === -1) {

                    node.tag = defaultTag;

                    if (!node.attrs) {
                        node.attrs = { class: tag };
                        return node;
                    }

                    var classes = node.attrs.class.split(' ');
                    if(classes.indexOf(tag) === -1) {
                        node.attrs.class = [tag].concat(classes).join(' ');
                    }
                }
            }
            return node;
        });
        return tree;
    };
};
