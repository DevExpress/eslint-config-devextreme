const options = { a: 1, 'b': 2 };
const unused = 1;
const _ignored = 2;

function setValue(element) {
  element = null;
  return options;
}

it.only('runs', () => setValue());
