// Example

test("Example", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-0");
});





// convertIntegerToRoman
test("TC-1: Boundary Value Low End", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-1");
});

test("TC-2: Boundary Value High End", function(assert) {
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-2");
});

test("TC-3: Middle Value", function(assert) {
  assert.propEqual(convertIntegerToRoman(1954), {value: "MCMLIV", message: '', result: true}, "TC-3");
});

test("TC-4: Invalid Negative Number", function(assert) {
  assert.propEqual(convertIntegerToRoman(-1), {value: "", message: 'Please enter a valid integer', result: false}, "TC-4");
});

test("TC-5: Invalid Zero", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: "", message: 'Out of range (1-3999)', result: false}, "TC-5");
});

test("TC-6: Invalid Type (String)", function(assert) {
  assert.propEqual(convertIntegerToRoman("X"), {value: "", message: 'Please enter a valid integer', result: false}, "TC-6");
});

test("TC-7: Out of Range High", function(assert) {
  assert.propEqual(convertIntegerToRoman(4000), {value: "", message: 'Out of range (1-3999)', result: false}, "TC-7");
});









// convertRomanToInteger
test("TC-8: Valid Low Value", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-8");
});

test("TC-9: Valid High Value", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-9");
});

test("TC-10: Mid Range Value", function(assert) {
  assert.propEqual(convertRomanToInteger("MCMLIV"), {value: 1954, message: '', result: true}, "TC-10");
});

test("TC-11: Invalid Roman Numeral", function(assert) {
  assert.propEqual(convertRomanToInteger("IIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-11");
});

test("TC-12: Invalid Characters", function(assert) {
  assert.propEqual(convertRomanToInteger("ABCD"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12");
});

test("TC-13: Lowercase Input", function(assert) {
  assert.propEqual(convertRomanToInteger("ix"), {value: 9, message: '', result: true}, "TC-13");
});

test("TC-14: Empty String", function(assert) {
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-14");
});

test("TC-15: Non-Roman Numerals Within Range", function(assert) {
  assert.propEqual(convertRomanToInteger("111"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-15");
});
