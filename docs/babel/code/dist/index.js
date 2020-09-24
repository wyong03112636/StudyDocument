'use strict';

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, '__esModule', {
  value: !0
});

exports["default"] = /*#__PURE__*/function () {
  function _class(t) {
    _classCallCheck(this, _class);

    this._options = Object.assign({
      container: document.body,
      width: 300,
      height: 200,
      fontFamily: 'Microsoft Yahei',
      fontSize: 16,
      color: 'rgba(200, 200, 200, 0.2)',
      content: '请勿外传',
      rotate: 20,
      zIndex: 1e4
    }, t), this._mo = null, this._styleStr = '', this.render();
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _this$_options = this._options,
          t = _this$_options.container,
          e = _this$_options.width,
          o = _this$_options.height,
          n = _this$_options.fontFamily,
          i = _this$_options.fontSize,
          s = _this$_options.color,
          r = _this$_options.content,
          l = _this$_options.rotate,
          c = _this$_options.zIndex;
      var h = "data:image/svg+xml,".concat(encodeURIComponent("<svg width=\"".concat(e, "\" height=\"").concat(o, "\" xmlns=\"http://www.w3.org/2000/svg\"><text fill=\"").concat(s, "\" font-family=\"").concat(n, "\" font-size=\"").concat(i, "\" transform=\"rotate(-").concat(l, " 430.346 46.644)\">").concat(r, "</text></svg>")));
      var d = document.querySelector('.__wm');
      var a = d || document.createElement('div');
      var m = "\n      position:fixed;\n      top:0px;\n      left:0px;\n      bottom:0px;\n      width:100vw;\n      height:100vh;\n      z-index:".concat(c, ";\n      pointer-events:none;\n      background:url(\"").concat(h, "\") repeat");
      this._styleStr = m, a.setAttribute('style', m), a.classList.add('__wm'), d || (t.style.position = 'relative', t.insertBefore(a, t.firstChild)), this.observe();
    }
  }, {
    key: "observe",
    value: function observe() {
      var _this = this;

      var t = window.MutationObserver;
      t && (this._mo = new t(function () {
        var t = document.querySelector('.__wm');
        (t && t.getAttribute('style') !== _this._styleStr || !t) && (_this._mo.disconnect(), _this._mo = null, _this.render());
      }), this._mo.observe(this._options.container, {
        attributes: !0,
        subtree: !0,
        childList: !0
      }));
    }
  }, {
    key: "close",
    value: function close() {
      this._mo.disconnect(), this._mo = null;
    }
  }]);

  return _class;
}();