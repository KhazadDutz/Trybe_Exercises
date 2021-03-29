function reverse(s) {
  let palavraNormal = s
  let palavraInvertida = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
      palavraInvertida += s[i];
  }
  return palavraInvertida;
}

if (palavraInvertida === palavraNormal) {
  console.log(true);
}else{
  console.log(false);
}
  