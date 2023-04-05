const Calculator = require('./calculator');
const myCalc = new Calculator();

describe('Add', () => {
  test('Valid input', () => {
    expect(() => {
      myCalc.add('a', 2)
    }).toThrow('Need valid number to add!');
  })

  test('Return result', () => {
    expect(myCalc.add(2, 2)).toBe(4);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(myCalc.add(2, 2))).toBeFalsy();
  })
})

describe('Subtract', () => {
  test('Valid input', () => {
    expect(() => {
      myCalc.subtract('a', 2)
    }).toThrow('Need valid number to subtract!');
  })

  test('Return result', () => {
    expect(myCalc.subtract(2, 2)).toBe(0);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(myCalc.subtract(2, 2))).toBeFalsy();
  })
})

describe('Divide', () => {
  test('Valid input', () => {
    expect(() => {
      myCalc.divide('a', 2)
    }).toThrow('Need valid number to divide!');
  })

  test('Return result', () => {
    expect(myCalc.divide(2, 2)).toBe(1);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(myCalc.divide(2, 2))).toBeFalsy();
  })
})

describe('Multiply', () => {
  test('Valid input', () => {
    expect(() => {
      myCalc.multiply('a', 2)
    }).toThrow('Need valid number to multiply!');
  })

  test('Return result', () => {
    expect(myCalc.multiply(2, 2)).toBe(4);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(myCalc.multiply(2, 2))).toBeFalsy();
  })
})