function solution(s, skip, index) {
  var answer = '';
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let splitS = s.split('');
  const splitSkip = skip.split('');
  const filteredAlphabet = alphabet.filter(
    (a) => !splitSkip.some((v) => a.includes(v))
  );
  console.log(filteredAlphabet);
  for (let i = 0; i < splitS.length; i++) {
    let changeI = filteredAlphabet.indexOf(splitS[i]) + index;
    if (changeI / filteredAlphabet.length > 0) {
      changeI =
        changeI -
        filteredAlphabet.length * Math.floor(changeI / filteredAlphabet.length);
    }
    splitS[i] = filteredAlphabet[changeI];
  }

  answer = splitS.join('');
  return answer;
}
