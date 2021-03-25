let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
  console.log(salarioBruto - (8/100 * salarioBruto));  
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  console.log(salarioBruto - (9/100 * salarioBruto));
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  console.log(salarioBruto - (11/100 * salarioBruto));
}else{
  console.log(salarioBruto - 570.88);
}

