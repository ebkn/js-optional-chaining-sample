const x: any = { a: 'foo', b: 'bar' };

console.log(x?.a);
console.log(x?.b);

console.log(x.c);
console.log(x?.c?.d?.e ?? 'not found');
