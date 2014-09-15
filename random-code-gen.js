function generateCode(length) {
  var code = '';
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * 3);
    if (random === 0) {
      code += generateChar(26, 97);
    } else if (random == 1) {
      code += generateChar(26, 65);
    } else {
      code += generateChar(10, 48);
    }
  }
  return code;
}

function generateChar(rangeStart, rangeEnd) {
  return String.fromCharCode(Math.floor(Math.random() * rangeStart + rangeEnd));
}

generateCode(8);