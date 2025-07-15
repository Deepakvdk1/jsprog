function consecnum(num) {
  let str = num.toString();
  let temp = str[0]; // Start with first digit
  let sequence = [];

  for (let i = 1; i < str.length; i++) {
    let prev = parseInt(str[i - 1]);
    let curr = parseInt(str[i]);

    if (Math.abs(curr - prev) === 1) {
      temp += str[i];
    } else {
      if (temp.length > 1) {
        sequence.push(temp);
      }
      temp = str[i]; // Reset with current digit
    }
  }

  // Push last sequence if valid
  if (temp.length > 1) {
    sequence.push(temp);
  }

  console.log(sequence);
}

let a = 9698423458;
consecnum(a);
