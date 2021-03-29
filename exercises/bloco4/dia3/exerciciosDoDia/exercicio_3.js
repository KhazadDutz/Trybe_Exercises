let n = 5;
let ast = '';
let esp = '';

for (let index = 0; index < n; index += 1){
  ast += '*';
  for (let index = 0; index < n - ast.length; index += 1){
    esp += ' ';
}
console.log(esp + ast);
esp = '';
}
