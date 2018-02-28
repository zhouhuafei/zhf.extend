'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('extend', function () {
    /**
     * @description 对象的扩展
     * @param {*} defaults - 默认对象
     * @param {*} inherits - 继承对像
     * @param {Boolean} isDeep - 是否进行深拷贝(默认进行深拷贝)
     * */
    function extend() {
        var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var inherits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var isDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var defaultsType = Object.prototype.toString.call(defaults).slice(8, -1).toLowerCase();
        var inheritsType = Object.prototype.toString.call(inherits).slice(8, -1).toLowerCase();
        if (defaultsType === inheritsType && isDeep) {
            if (defaultsType === 'object' || defaultsType === 'array') {
                // 当为对象或者为数组
                Object.keys(inherits).forEach(function (attr) {
                    var attrDefaultsType = Object.prototype.toString.call(defaults[attr]).slice(8, -1).toLowerCase();
                    var attrInheritsType = Object.prototype.toString.call(inherits[attr]).slice(8, -1).toLowerCase();
                    if (attrDefaultsType === attrInheritsType && isDeep) {
                        // 类型相同
                        if (attrDefaultsType === 'object' || attrDefaultsType === 'array') {
                            // 当为对象或者为数组
                            extend(defaults[attr], inherits[attr]);
                        } else {
                            defaults[attr] = inherits[attr];
                        }
                    } else {
                        // 类型不同,直接后面的覆盖前面的
                        defaults[attr] = inherits[attr];
                    }
                });
            } else {
                defaults = inherits;
            }
        } else {
            defaults = inherits;
        }
        return defaults;
    }

    return extend;
});