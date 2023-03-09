

function randomNum(min, max) {
  try {
    if (min >= max){throw e;}
    return Math.floor(Math.random() * (max - min + 1) + min);
  } catch (err){
    return 0;
  }
}

function maxLenghtLines(line, maxLength){
  return line.length <= maxLength;
}
