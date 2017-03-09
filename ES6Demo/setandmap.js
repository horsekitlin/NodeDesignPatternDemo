const profiles = new Map();

profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');
console.log(profiles.size); // 3


/*console.log(profiles.has('twitter')); // true
console.log(profiles.get('twitter')); // "@adalovelace"
console.log(profiles.has('youtube')); // false

profiles.delete('facebook');
console.log(profiles.has('facebook')); // false
console.log(profiles.get('facebook')); // undefined*/

/*for (const entry of profiles) {
  console.log(entry);
}*/

/*const tests = new Map();
tests.set(() => 2 + 2, 4);
tests.set(() => 2 * 2, 4);
tests.set(() => 2 / 2, 1);
for (const entry of tests) {
  console.log((entry[0]() === entry[1]) ? 'PASS' : 'FAIL');
}*/

/*const s = new Set([0, 1, 2, 3]);
console.log(s);
s.add(4);
console.log(s);

s.add(3); 
console.log(s);

console.log(s.size); 

s.delete(0);
s.has(0); 
for (const entry of s) {
  console.log(entry);
}*/