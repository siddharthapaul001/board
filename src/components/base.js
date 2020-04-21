export default class Base {

  _setDefaultConfig () {
    this._config = {
      frameDrawn: false,
      requestedAnimationFrame: false
      // postDrawFn: []
    };
    this._components = {};
  }

  _requestDraw() {
    if (!this._config.requestedAnimationFrame) {
      this._draw();
      this._config.requestedAnimationFrame = true;
    }
  }

  _drawFrame () {
    // code to initate the constant frame
  }

  _draw () {
    if (!this._config.frameDrawn) {
      this._drawFrame();
    }
  }

  // afterDraw(cb) {
  //   this._config.postDrawFn.push(cb);
  // }
};