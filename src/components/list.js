import {
  createHTMLElement
} from './utils/helpers';

export default class List {
  constructor(parent, beforeElem) {
    this._setDefaultConfig(parent, beforeElem);
    this._requestDraw();
  }

  _setDefaultConfig(parent, beforeElem) {
    this._config = {
      title: 'Enter title here',
      frameDrawn: false,
      parent,
      beforeElem,
      requestedAnimationFrame: false
      // postDrawFn: []
    };
    this._components = {};
  }

  // afterDraw(cb) {
  //   this._config.postDrawFn.push(cb);
  // }

  _requestDraw () {
    if (!this._config.requestedAnimationFrame) {
      this._draw();
      this._config.requestedAnimationFrame = true;
    }
  }

  _drawFrame() {
    this._config.frameDrawn = true;
    let listWraper = createHTMLElement('div', {
        class: 'list-wraper'
      }),
      list = createHTMLElement('div', {
        class: 'list'
      }),
      listHeader = createHTMLElement('div', {
        class: 'header'
      }),
      inpTitle = createHTMLElement('input', {
        class: 'inp-transparent inp-title',
        value: 'Enter title here...'
      }),
      btnMenu = createHTMLElement('a', {
        class: 'btn-more',
        href: '#!'
      }, '···'),
      itemsContainer = createHTMLElement('div', {
        class: 'items-container'
      }),
      inpContainer = createHTMLElement('div', {
        class: 'input-container'
      }),
      txtNoteContainer = createHTMLElement('div', {
        class: 'txt-note-container'
      }),
      inpAddCard = createHTMLElement('input', {
        class: 'inp-transparent txt-note',
        placeholder: '＋ Add another card',
        type: 'text'
      }),
      saveBtnContainer = createHTMLElement('div', {
        class: 'btn-save-container'
      }),
      btnSave = createHTMLElement('a', {
        class: 'btn btn-save'
      }),
      img = createHTMLElement('img', {
        src: 'assets/floppy_disk.png',
        width: '20px',
        height: '20px'
      });
    
    listHeader.node.appendChild(inpTitle.node);
    listHeader.node.appendChild(btnMenu.node);
    list.node.appendChild(listHeader.node);
    list.node.appendChild(itemsContainer.node);
    txtNoteContainer.node.appendChild(inpAddCard.node);
    inpContainer.node.appendChild(txtNoteContainer.node);
    btnSave.node.appendChild(img.node);
    saveBtnContainer.node.appendChild(btnSave.node);
    inpContainer.node.appendChild(saveBtnContainer.node);
    list.node.appendChild(inpContainer.node);
    listWraper.node.appendChild(list.node);

    this._config.parent.insertBefore(listWraper.node, this._config.beforeElem);
  }

  _drawItem() {
    let item = createHTMLElement('div', {
        class: 'item'
      }),
      itemText = createHTMLElement('div', {
        class: 'item-text'
      });
  }

  _draw() {
    if (!this._config.frameDrawn) {
      this._drawFrame();
    }

    // for (let i = 0, l = this._config.postDrawFn.length; i < l; i++) {
    //   this._config.postDrawFn[i]();
    // }
  }
}