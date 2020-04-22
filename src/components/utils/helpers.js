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
  if (text !== UNDEF) {
    node.textContent = text;
  }
  return el;
}

// ref: https://css-tricks.com/snippets/javascript/move-cursor-to-end-of-input/
function moveCursorToEnd(el) {
  if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
  } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      let range = el.createTextRange();
      range.collapse(false);
      range.select();
  }
}

export {
  doc,
  UNDEF,
  createHTMLElement,
  moveCursorToEnd
}