const fullName = require('./index');

test('test for fullname like Ravi kumar', () => {
  expect(fullName.getFullName('Ravi', 'kumar')).toBe('Ravi kumar');
});
