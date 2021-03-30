function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--) {
      o += s[i];
  }
  if (o === s){
    return(true);
  }else{
    return(false);
  }
}

let palavra = 'arara';
console.log(reverse (palavra));