# 对象的扩展
```
const extend = require('zhf.extend');

extend([1, 2, 3], [undefined, 4, undefined]); // [1, 4, 3]
extend({a: 1}, {a: undefined}); // {a: 1}
extend({obj: {a: 1}}, {obj: {a: undefined}}); // {obj: {a: 1}}
extend([{obj: {a: 1}}, 2], [{obj: {a: undefined}}, undefined]); // [{obj: {a: 1}}, 2]
extend([1, 3], [2]); // [2, 3]
extend([1, [3, 5]], [2, [4]]); // [2, [4, 5]]
extend(true, false); // false
extend({a: 1}, {b: 2}); // {a: 1, b: 2}
extend({a: 1, b: {one: 1, two: 2}}, {b: {three: 3}}); // {a: 1, b: {one: 1, two: 2, three: 3}}
extend({a: 1, b: {one: 1, two: 2}}, 'hello world'); // 'hello world'
```
