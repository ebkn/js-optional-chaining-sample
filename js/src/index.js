const x = { a: 'foo', b: 'bar' };

console.log(x?.a);
console.log(x?.b);

console.log(x?.c?.d?.e);
// console.log(x?.c ?? 'not found');
