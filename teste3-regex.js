//Como dividir um texto que deveria ser um arquivo CSV (valores separados por vírgula), mas que na verdade tem valores separados por vírgula, hífen e ponto e vírgula sem um padrão:
var arquivo = '100,200-150,200;20';
var exp2 = /[,;-]/;
var valores = arquivo.split(exp2);
console.log(valores);