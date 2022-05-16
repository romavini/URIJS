// 1005
input = `5.0
7.1`

var lines = input.split('\n');

var media = (parseFloat(lines[0])*3.5 + parseFloat(lines[1])*7.5) / 11;

console.log("MEDIA = " + media.toFixed(5));