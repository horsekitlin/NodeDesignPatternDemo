export default function () {
  console.log('this is default function');
}

export function helloFunc(name) {
  console.log(`Hello ${name}!`);
}

export const wowFunc = (name) => {
  console.log(`WOW! ${name}!`);
}
