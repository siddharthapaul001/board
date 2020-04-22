import {
  createHTMLElement,
  moveCursorToEnd
} from './utils/helpers';
import Base from './base';

export default class ListItem extends Base {

  constructor(attrs) {
    super();
    this._setDefaultConfig();
    this.configure(attrs);
    this._requestDraw();
  }

  _setDefaultConfig() {
    super._setDefaultConfig();
    // this._config.text = '';
  }

  _drawFrame() {
    let itemWraper = createHTMLElement('div', {
        class: 'item-wraper',
        draggable: 'true'
      }),
      item = createHTMLElement('div', {
        class: 'item'
      }),
      itemText = createHTMLElement('div', {
        class: 'item-text'
      }, this._config.text),
      btnEdit = createHTMLElement('a', {
        class: 'btn right btn-edit',
        href: '#!'
      }),
      icoEdit = createHTMLElement('img', {
        class: 'ico-edit',
        src: 'assets/pencil.png',
        width: '10px',
        height: '10px'
      });

    btnEdit.node.addEventListener('click', function () {
      createHTMLElement(itemText, {
        'contenteditable': 'true'
      });
      moveCursorToEnd(itemText.node);
    });

    itemText.node.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        if (itemText.node.textContent !== '') {
          this._config.text = itemText.node.textContent;
          createHTMLElement(itemText, {
            'contenteditable': 'false'
          }, this._config.text);
        } else {
          this.dispose();
        }
      }
    });

    btnEdit.node.appendChild(icoEdit.node);
    item.node.appendChild(itemText.node);
    item.node.appendChild(btnEdit.node);
    itemWraper.node.appendChild(item.node);
    this._components['root-wraper'] = itemWraper;
    this._components['root'] = item;
    this._components['inp-edit'] = itemText;
    this._components['item-text'] = itemText;
  }

  _draw() {
    super._draw();
  }
}