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

  setIdx(idx) {
    this._config.idx = idx;
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

  dispose () {
    if (this._components['root-wraper']) {
      this._components['root-wraper'].node.parentNode.removeChild(this._components['root-wraper'].node);
      this._disposed = true;
      this._components = {};
      this._config = {};
    }
  }

  // afterDraw(cb) {
  //   this._config.postDrawFn.push(cb);
  // }
};