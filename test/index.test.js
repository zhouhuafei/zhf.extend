const extend = require('../dist/index.min');

test(`extend([1, 3], [2]); // [2, 3]`, () => {
    expect(extend([1, 3], [2])).toEqual([2, 3]);
});

test(`extend([1, [3, 5]], [2, [4]]); // [2, [4, 5]]`, () => {
    expect(extend([1, [3, 5]], [2, [4]])).toEqual([2, [4, 5]]);
});

test(`extend(true, false); // false`, () => {
    expect(extend(true, false)).toEqual(false);
});

test(`extend({a: 1}, {b: 2}); // {a: 1, b: 2}`, () => {
    expect(extend({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
});

test(`extend({a: 1, b: {one: 1, two: 2}}, {b: {three: 3}}); // {a: 1, b: {one: 1, two: 2, three: 3}}`, () => {
    expect(extend({a: 1, b: {one: 1, two: 2}}, {b: {three: 3}})).toEqual({a: 1, b: {one: 1, two: 2, three: 3}});
});

test(`extend({a: 1, b: {one: 1, two: 2}}, 'hello world'); // 'hello world'`, () => {
    expect(extend({a: 1, b: {one: 1, two: 2}}, 'hello world')).toEqual('hello world');
});
