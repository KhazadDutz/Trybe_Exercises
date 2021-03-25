let custoDoProduto = 1
let valorVenda = 1.2;
let custoTotal = custoDoProduto + (20/100 * custoDoProduto)
let lucro = (valorVenda - custoTotal) * 1000

if (custoDoProduto < 0 || valorVenda < 0) {
  console.log('Coloque um valor >= 0');
} else {
  console.log(lucro);
}



