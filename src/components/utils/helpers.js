const doc = document;
let UNDEF;

function createHTMLElement(elem, attrs, text) {
  let node, attrNames, el = elem;

  if (typeof el === 'string') {
    node = doc.createElement(el);
    el = {
      attrs: {},
      node
    }
  } else {
    node = el.node;
  }
  attrNames = Object.keys(attrs);
  for (let i = 0, l = attrNames.length; i < l; i++) {
    if (el.attrs[attrNames[i]] && el.attrs[attrNames[i]] === attrs[attrNames[i]]) {
      // no need to change it
    } else {
      el.attrs[attrNames[i]] = attrs[attrNames[i]];
      node.setAttribute(attrNames[i], attrs[attrNames[i]]);
    }
  }
  node.textContent = text;
  return el;
}

export {
  doc,
  UNDEF,
  createHTMLElement
}