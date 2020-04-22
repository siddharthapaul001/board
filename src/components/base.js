export default class Base {

  _setDefaultConfig () {
    this._config = {
      frameDrawn: false,
      requestedAnimationFrame: false
      // postDrawFn: []
    };
    this._components = {};
  }

  configure (attrs) {
    let config = this._config;
    this._config = {
      ...config,
      ...attrs
    };
  }

  getNode () {
    return this._components['root-wraper'] && this._components['root-wraper'].node;
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
    // for (let i = 0, l = this._config.postDrawFn.length; i < l; i++) {
    //   this._config.postDrawFn[i]();
    // }
  }

  // afterDraw(cb) {
  //   this._config.postDrawFn.push(cb);
  // }
};