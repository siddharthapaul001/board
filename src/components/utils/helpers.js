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
function _moveCursorToEnd(el) {
  if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
  } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      let range = el.createTextRange();
      range.collapse(false);
      range.select();
  }
}

// ref: https://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity/3866442#3866442
function moveCursorToEnd(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}

export {
  doc,
  UNDEF,
  createHTMLElement,
  moveCursorToEnd
}