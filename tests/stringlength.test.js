const stringLength = require('../scripts/stringLength');

test('The length of string should be:', () => {
  expect(stringLength('ben')).toBe(3);
})

test('Scope of string', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String is out of scope');
})