import {
  createHTMLElement,
  getFromEnv
} from './utils/helpers';
import Base from './base';
import Item from './list-item';

export default class List extends Base {
  constructor(parent, beforeElem, attrs) {
    super();
    this._setDefaultConfig(parent, beforeElem);
    attrs && this.configure(attrs);
    this._requestDraw();
  }

  _setDefaultConfig(parent, beforeElem) {
    super._setDefaultConfig();
    this._config.parent = parent;
    this._config.beforeElem = beforeElem;
    this._config.title = '';
    this._listItems = [];
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
        value: this._config.title,
        placeholder: 'Enter title here'
      }),
      btnMenu = createHTMLElement('a', {
        class: 'btn-more',
        href: '#!'
      }),
      itemsContainer = createHTMLElement('div', {
        class: 'items-container',
        style: 'max-height:' + getFromEnv('ic-height') + 'px'
      }),
      inpContainer = createHTMLElement('div', {
        class: 'input-container'
      }),
      txtNoteContainer = createHTMLElement('div', {
        class: 'txt-note-container'
      }),
      inpAddCard = createHTMLElement('input', {
        class: 'inp-transparent txt-note',
        placeholder: '＋ Add card (Enter text here)',
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

    listWraper.node.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    })
    listWraper.node.addEventListener('drop', (e) => {
      let currentIdx = e.dataTransfer.getData('currentIdx'),
        currentParentIdx = e.dataTransfer.getData('currentParentIdx'),
        item = getFromEnv('lists')[currentParentIdx].getItem(currentIdx),
        txt = item.getConfig('text');
      this.saveNote(txt);
      item.dispose();
    });

    btnMenu.node.addEventListener('click', () => {
      this.dispose();
    });

    btnSave.node.addEventListener('click', () => {
      inpAddCard.node.value !== '' && this.saveNote(inpAddCard.node.value);
      inpAddCard.node.value = '';
    });

    inpTitle.node.addEventListener('keyup', () => {
      this._config.title = inpTitle.node.value;
    });

    inpAddCard.node.addEventListener('keyup', (e) => {
      if (e.keyCode === 13 && inpAddCard.node.value !== '') {
        this.saveNote(inpAddCard.node.value);
        inpAddCard.node.value = '';
      }
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

    this._components['root-wraper'] = listWraper;
    this._components['root'] = list;
    this._components['inp-title'] = inpTitle;
    this._components['items-container'] = itemsContainer;
    this._components['inp-add-card'] = inpAddCard;
  }

  saveNote(txtNote) {
    let item = new Item({
        text: txtNote
      });
    item.onDrawComplete(() => {
      this.addItem(item);
      this._components['items-container'].node.scrollTop = this._components['items-container'].node.scrollHeight;
    });
  }

  addItem(listItem) {
    this._components['items-container'].node.appendChild(listItem.getNode());
    listItem.setIdx(this._listItems.push(listItem) - 1);
    listItem.setParentComponent(this);
  }

  getItem (idx) {
    return this._listItems[idx];
  }

  _draw () {
    super._draw();
    this._components['inp-title'].node.value = this._config.title;
    this._fireDrawComplete();
  }

  serialize () {
    return {
      title: this._config.title,
      items: this._listItems.filter(item => !item._disposed).map(item => item.serialize())
    };
  }
}