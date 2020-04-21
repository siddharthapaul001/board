import Base from './base';

export default class ListItem extends Base{

  constructor() {
    super();
  }

  _requestDraw () {
    if (!this._config.requestedAnimationFrame) {
      this._draw();
      this._config.requestedAnimationFrame = true;
    }
  }

  _drawFrame() {
    let item = createHTMLElement('div', {
        class: 'item'
      }),
      itemText = createHTMLElement('div', {
        class: 'item-text'
      });
  }

  _draw () {

  }
}